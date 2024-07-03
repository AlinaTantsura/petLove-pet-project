// import Pagination from "../components/News/Pagination"
import NoticesFilters from "../components/Notices/NoticesFilters"
import NoticesList from "../components/Notices/NoticesList"
import Title from "../components/Title"

const Noticespage = () => {
  return (
    <div className="mt-[34px]">
      <div className="xl:ml-8">
      <Title>Find your favorite pet</Title>
      </div>
      <NoticesFilters />
      <NoticesList />
      {/* <Pagination /> */}
    </div>
  )
}

export default Noticespage