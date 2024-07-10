import { useState } from "react"
import Pagination from "../components/News/Pagination"
import NoticesFilters from "../components/Notices/NoticesFilters"
import NoticesList from "../components/Notices/NoticesList"
import Title from "../components/Title"
import { useSelector } from "react-redux"
import { selectLastPage } from "../redux/notices/noticesSelectors"


const Noticespage = () => {
  const [page, setPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");
  const lastPage = useSelector(selectLastPage)

  return (
    <div className="mt-[34px]">
      <div className="xl:ml-8">
      <Title>Find your favorite pet</Title>
      </div>
      <NoticesFilters setSearchWord={setSearchWord} />
      <NoticesList page={page} setPage={setPage} searchWord={searchWord} />
      <Pagination setPage={setPage} page={page} lastPage={lastPage} />
    </div>
  )
}

export default Noticespage