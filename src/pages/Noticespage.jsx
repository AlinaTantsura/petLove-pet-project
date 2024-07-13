import { useState } from "react";
import Pagination from "../components/News/Pagination";
import NoticesFilters from "../components/Notices/NoticesFilters";
import NoticesList from "../components/Notices/NoticesList";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import { selectLastPage } from "../redux/notices/noticesSelectors";

const Noticespage = () => {
  const [page, setPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");
  const [category, setCategory] = useState("all");
  const [gender, setGender] = useState("all");
  const [type, setType] = useState("all");
  const [location, setLocation] = useState(null);
  const lastPage = useSelector(selectLastPage);

  return (
    <div className="mt-[34px]">
      <div className="xl:ml-8">
        <Title>Find your favorite pet</Title>
      </div>
      <NoticesFilters
        setSearchWord={setSearchWord}
        setCategory={setCategory}
        category={category}
        gender={gender}
        setGender={setGender}
        type={type}
        setType={setType}
        location={location}
        setLocation={setLocation}
        // sortWord={sortWord}
        // setSortWord={setSortWord}
      />
      <NoticesList
        page={page}
        setPage={setPage}
        searchWord={searchWord}
        category={category}
        gender={gender}
        type={type}
        location={location}
        // sortWord={sortWord}
      />
      <Pagination setPage={setPage} page={page} lastPage={lastPage} />
    </div>
  );
};

export default Noticespage;
