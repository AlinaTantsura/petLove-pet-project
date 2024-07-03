import { useState } from "react";
import { useSelector } from "react-redux";
import NewsList from "../components/News/NewsList.jsx";
import Pagination from "../components/News/Pagination.jsx";
import SearchField from "../components/News/SearchField.jsx";
import Title from "../components/Title.jsx";
import { selectLastPage } from "../redux/news/newsSelectors.js";

const Newspage = () => {
  const [page, setPage] = useState(1);
  const [searchWord, setSearchWord] = useState('');
  const lastPage = useSelector(selectLastPage);
  return (
    <div className="mt-[34px] md:mt-[53px] xl:mt-[64px] xl:px-8">
      <div className=" mb-5 md:mb-[44px] xl:mb-[60px] md:flex md:justify-between md:items-center">
        <Title>News</Title>
        <div className="mt-5 md:mt-0">
        <SearchField setSearchWord={setSearchWord} isNews={true}/>
        </div>
      </div>
      <NewsList page={page} searchWord={searchWord} />
      {lastPage > 1 && (
        <Pagination setPage={setPage} page={page} lastPage={lastPage} />
      )}
    </div>
  );
};

export default Newspage;
