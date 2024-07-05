import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../components/News/NewsList.jsx";
import Pagination from "../components/News/Pagination.jsx";
import SearchField from "../components/News/SearchField.jsx";
import Title from "../components/Title.jsx";
import { selectNews } from "../redux/news/newsSelectors.js";
import { getNews } from "../redux/news/newsOperations.js";
import { selectSearchWord } from "../redux/selectors.js";

const Newspage = () => {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const newsList = useSelector(selectNews);
  const searchWord = useSelector(selectSearchWord);
  // console.log(searchWord)
    
  useEffect(() => {
    if (newsList.length === 0 || currentPage !== page || searchWord) {
      console.log("Is dispatch?")
        dispatch(getNews({page, searchWord}));
        setCurrentPage(page)
    }
  }, [dispatch, newsList, page, currentPage, searchWord]);

  // console.log(searchWord)
  return (
    <div className="mt-[34px] md:mt-[53px] xl:mt-[64px] xl:px-8">
      <div className=" mb-5 md:mb-[44px] xl:mb-[60px] md:flex md:justify-between md:items-center">
        <Title>News</Title>
        <div className="mt-5 md:mt-0">
        <SearchField isNews={true}/>
        </div>
      </div>
      <NewsList newsList={newsList} />
      <Pagination setPage={setPage} page={page}/>
    </div>
  );
};

export default Newspage;
