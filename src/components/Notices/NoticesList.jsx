/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import NoticesItem from "./NoticesItem";
import {
  selectFavoritesIds,
  selectLastPage,
  selectNotices,
  selectSexValue,
  selectSortWord,
} from "../../redux/notices/noticesSelectors";
import { useEffect, useState } from "react";
import {
  addFavoriteNotice,
  getAllNotices,
  getNotices,
  removeFavoriteNotice,
} from "../../redux/notices/noticesOperations";
import { getCurrentUser } from "../../redux/auth/authOperations";
import { selectUser } from "../../redux/auth/authSelectors";

// eslint-disable-next-line react/prop-types
const NoticesList = ({
  page,
  setPage,
  searchWord,
  category,
  type,
  location,
}) => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const favorites = useSelector(selectFavoritesIds);
  const [addId, setAddId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const { token } = useSelector(selectUser);
  const isLogin = Boolean(token);
  const lastPage = useSelector(selectLastPage);
  const gender = useSelector(selectSexValue);
  const sortWord = useSelector(selectSortWord);
  const firstNotPopular = Boolean(sortWord === "unpopular")

  useEffect(() => {
    setPage(1);
  }, [searchWord, category, setPage, type, gender, location]);

  useEffect(() => {
    dispatch(
      getNotices({ page, keyword: searchWord, category, species: type, locationId: location, firstNotPopular })
    );
    
  //   if () {
  //     dispatch(
  //       getAllNotices({
  //         page,
  //         keyword: searchWord,
  //         category,
  //         species: type,
  //         limit: lastPage * 6,
  //         locationId: location,
  //         firstNotPopular
  //       })
  //     );
  // }
    if (gender !== "all" || sortWord === "cheap" || sortWord === "expensive") {
      dispatch(
        getAllNotices({
          page,
          keyword: searchWord,
          category,
          species: type,
          limit: lastPage * 6,
          locationId: location,
          firstNotPopular
        })
      );
    }
    
  }, [dispatch, page, searchWord, category, type, gender, lastPage, location, firstNotPopular, sortWord]);

  useEffect(() => {
    if (isLogin) dispatch(getCurrentUser());
  }, [dispatch, isLogin]);

  useEffect(() => {
    if (addId) {
      dispatch(addFavoriteNotice(addId))
      setAddId(null);
    }
    if (deleteId) {
      dispatch(removeFavoriteNotice(deleteId));
      setDeleteId(null);
    }
  }, [dispatch, addId, deleteId, notices]);

  const isFavorite = (id) => {
    return favorites.includes(id) ? true : false;
  };

  return ((gender === "all" && notices.length > 0) ||
    (gender !== "all" && notices.length > 0) )&& (
    <ul className="my-10 xl:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-10 gap-5">
      {/* {(gender === "all" && notices.length > 0) && notices.map((item) => */}
      {notices.length > 0 &&
        notices.map((item) => (
          <li key={item._id}>
            <NoticesItem
              data={item}
              isFavorite={isFavorite(item._id)}
              setAddId={setAddId}
              setDeleteId={setDeleteId}
            />
          </li>
        ))}
      {/* {(gender === "all" && filteredNotices.length > 0) && filteredNotices.map((item) =>
      (<li key={item._id}>
        <NoticesItem data={item} isFavorite={isFavorite(item._id)} setAddId={setAddId} setDeleteId={setDeleteId} />
      </li>))} */}
    </ul>
  );
};

export default NoticesList;
