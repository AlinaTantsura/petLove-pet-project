import { useState } from "react"
import NewsList from "../components/News/NewsList.jsx"
import Pagination from "../components/News/Pagination.jsx"
import SearchField from "../components/News/SearchField.jsx"
import Title from "../components/Title.jsx"

const Newspage = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="mt-[34px] md:mt-[53px] xl:mt-[64px] xl:px-8">
      <div className=" mb-5 md:mb-[44px] xl:mb-[60px] md:flex md:justify-between md:items-center">
      <Title>News</Title>
      <SearchField />
      </div>
      <NewsList page={page} />
      <Pagination setPage={setPage} page={page} />
    </div>
  )
}

export default Newspage