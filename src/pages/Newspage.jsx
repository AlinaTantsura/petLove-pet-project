import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../components/News/NewsList.jsx";
import Pagination from "../components/News/Pagination.jsx";
import SearchField from "../components/News/SearchField.jsx";
import Title from "../components/Title.jsx";
import { selectErrorNews, selectisLoadingNews, selectLastPage } from "../redux/news/newsSelectors.js";
import { Loader } from "../components/Loader.jsx";
import { getNews } from "../redux/news/newsOperations.js";

const Newspage = () => {
  const [page, setPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");
  const lastPage = useSelector(selectLastPage);
  const isLoadingNews = useSelector(selectisLoadingNews);
  const newsError = useSelector(selectErrorNews);
  const dispatch = useDispatch();
  useEffect(() => {
    setPage(1)
  }, [searchWord, setPage]);
    useEffect(() => {
      if(!newsError) dispatch(getNews({page,keyword:searchWord}))
    }, [dispatch, searchWord, page, newsError]);
  
  if(isLoadingNews) return <Loader />
  return (
    <div className="mt-[34px] md:mt-[53px] xl:mt-[64px] xl:px-8">
      <div className=" mb-5 md:mb-[44px] xl:mb-[60px] md:flex md:justify-between md:items-center">
        <Title>News</Title>
        <div className="mt-5 md:mt-0">
          <SearchField isNews={true} setSearchWord={setSearchWord} />
        </div>
      </div>
      <NewsList />
      <Pagination setPage={setPage} page={page} lastPage={lastPage}/>
    </div>
  );
};

export default Newspage;
