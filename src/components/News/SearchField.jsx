/* eslint-disable react/prop-types */
import clsx from "clsx";
import sprite from "../../assets/images/sprite.svg";
import { useState } from "react";

const SearchField = ({ isNews = false, setSearchWord }) => {
  const [searchCurrent, setSearchCurrent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchWord(e.target.elements.search.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("relative md:mt-0 w-full", isNews && "md:w-[230px]")}
    >
      <input
        type="text"
        name="search"
        className={clsx(
          "w-full p-3 md:p-[14px] rounded-[30px] bg-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] outline-none text-black-main placeholder:text-black-main placeholder:opacity-100",
          isNews && "placeholder:opacity-50 border border-border-black"
        )}
        placeholder="Search"
        value={searchCurrent}
        onChange={(e) => setSearchCurrent(e.target.value)}
      />
      {searchCurrent && (
        <button
          type="button"
          onClick={() => {
            setSearchCurrent("");
          }}
          className="w-[18px] h-[18px] absolute top-[13px] md:top-[16px] right-[34px] md:right-[40px]"
        >
          <svg className="w-full h-full stroke-black-main">
            <use href={sprite + "#icon-x"} />
          </svg>
        </button>
      )}
      <button
        type="submit"
        className="w-[18px] h-[18px] absolute top-[13px] md:top-[16px] right-3 md:right-[14px]"
      >
        <svg className="w-full h-full">
          <use href={sprite + "#icon-search"} />
        </svg>
      </button>
    </form>
  );
};

export default SearchField;
