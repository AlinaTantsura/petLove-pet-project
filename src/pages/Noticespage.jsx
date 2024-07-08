import { useEffect, useState } from "react"
import Pagination from "../components/News/Pagination"
import NoticesFilters from "../components/Notices/NoticesFilters"
import NoticesList from "../components/Notices/NoticesList"
import Title from "../components/Title"
import { useSelector } from "react-redux"
import { selectLastPage } from "../redux/notices/noticesSelectors"


const Noticespage = () => {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = useSelector(selectLastPage)

  useEffect(() => {
    if(page !== currentPage)
      setCurrentPage(page)
  }, [page, currentPage])

  return (
    <div className="mt-[34px]">
      <div className="xl:ml-8">
      <Title>Find your favorite pet</Title>
      </div>
      <NoticesFilters />
      <NoticesList page={page} currentPage={currentPage} />
      <Pagination setPage={setPage} page={page} lastPage={lastPage} />
    </div>
  )
}

export default Noticespage