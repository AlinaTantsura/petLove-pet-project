/* eslint-disable react/prop-types */
import NewsItem from "./NewsItem";

const NewsList = ({ newsList}) => {
    
  console.log(newsList);
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 md:gap-x-6 xl:gap-x-[35px] md:gap-y-[60px] xl:gap-y-[68px]">
          {newsList && newsList.map(newsItem => (
        <li key={newsItem._id}>
            <NewsItem data={newsItem}/>
        </li>   
      )) 
      }
    </ul>
  );
};

export default NewsList;
