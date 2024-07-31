/* eslint-disable react/prop-types */
import { useEffect } from "react";
import NewsItem from "./NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../../redux/news/newsSelectors";
import { getNews } from "../../redux/news/newsOperations";

const NewsList = ({ page, searchWord, setPage}) => {
  const dispatch = useDispatch();
  const newsList = useSelector(selectNews);

  useEffect(() => {
    setPage(1)
  },[searchWord, setPage])

    useEffect(() => {
        dispatch(getNews({page,keyword:searchWord}))

    }, [dispatch, searchWord, page]);
  
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 md:gap-x-6 xl:gap-x-[35px] md:gap-y-[60px] xl:gap-y-[68px]">
          {newsList.length > 0 ? newsList.map(newsItem => (
        <li key={newsItem._id}>
            <NewsItem data={newsItem}/>
            </li>  
           
      )) : (<p>There are no news for your request. Try change your request)</p>) 
      }
    </ul>
  );
};

export default NewsList;
