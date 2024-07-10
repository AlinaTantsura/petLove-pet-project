import { useDispatch, useSelector } from "react-redux"
import NoticesItem from "./NoticesItem"
import { selectFavoritesIds, selectNotices } from "../../redux/notices/noticesSelectors";
import { useEffect, useState} from "react";
import { addFavoriteNotice, getNotices, removeFavoriteNotice } from "../../redux/notices/noticesOperations";
import { getCurrentUser } from "../../redux/auth/authOperations";

// eslint-disable-next-line react/prop-types
const NoticesList = ({page, setPage, searchWord}) => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const favorites = useSelector(selectFavoritesIds);
  const [addId, setAddId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  
  useEffect(() => {
    setPage(1)
  },[searchWord, setPage])

  useEffect(() => {
      dispatch(getNotices({page, keyword: searchWord}))
  }, [dispatch, page, searchWord]);

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  useEffect(() => {
    if (addId) {
      dispatch(addFavoriteNotice(addId));
      setAddId(null);
    }
    if (deleteId) {
      dispatch(removeFavoriteNotice(deleteId));
      setDeleteId(null)
    }
  }, [dispatch, addId, deleteId])
  

  const isFavorite = (id) => {
    return favorites.includes(id) ? true : false
  }
  // console.log(notices)

  return (
    <ul className="my-10 xl:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-10 gap-5">
      {notices.length > 0 && notices.map((item) =>
      (<li key={item._id}>
        <NoticesItem data={item} isFavorite={isFavorite(item._id)} setAddId={setAddId} setDeleteId={setDeleteId} />
      </li>))}
    </ul>
  )
}

export default NoticesList