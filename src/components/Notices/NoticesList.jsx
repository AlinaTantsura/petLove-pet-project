import { useDispatch, useSelector } from "react-redux"
import NoticesItem from "./NoticesItem"
import { selectNotices } from "../../redux/notices/noticesSelectors";
import { useEffect} from "react";
import { getNotices } from "../../redux/notices/noticesOperations";

// eslint-disable-next-line react/prop-types
const NoticesList = ({page, currentPage}) => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  

  useEffect(() => {
    if(notices.length === 0 || page !== currentPage)
      dispatch(getNotices(page))
  }, [dispatch, page, notices, currentPage])

  return (
    <ul className="my-10 xl:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-10 gap-5">
      {notices.length > 0 && notices.map((item) =>
      (<li key={item._id}>
          <NoticesItem data={item} />
      </li>))}
    </ul>
  )
}

export default NoticesList