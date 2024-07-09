/* eslint-disable react/prop-types */
import { useEffect } from "react";
import NewsItem from "./NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../../redux/news/newsSelectors";
import { getNews } from "../../redux/news/newsOperations";

const NewsList = ({ page, searchWord}) => {
  const dispatch = useDispatch();
  const newsList = useSelector(selectNews);
  console.log(newsList)

    useEffect(() => {
      console.log(searchWord)
        dispatch(getNews({page,keyword:searchWord}))

    }, [dispatch, searchWord, page]);
  
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
