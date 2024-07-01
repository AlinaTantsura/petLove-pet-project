/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import { getNews } from "../../redux/news/newsOperations";
import { selectNews } from "../../redux/news/newsSelectors";

const NewsList = ({ page }) => {
    const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
    const newsList = useSelector(selectNews);
    
  useEffect(() => {
    if (newsList.length === 0 || currentPage !==page) {
        dispatch(getNews(page));
        setCurrentPage(page)
    }
  }, [dispatch, newsList, page, currentPage]);
  console.log(newsList);
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 md:gap-x-6 xl:gap-x-[35px] md:gap-y-[60px] xl:gap-y-[68px]">
          {newsList.length > 0 && newsList.map(newsItem => (
        <li key={newsItem._id}>
            <NewsItem data={newsItem}/>
        </li>   
      )) 
      }
    </ul>
  );
};

export default NewsList;
