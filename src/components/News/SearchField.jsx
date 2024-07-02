/* eslint-disable react/prop-types */
import sprite from "../../assets/images/sprite.svg";

const SearchField = ({ setSearchWord }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchWord(e.target.elements.search.value)
  }

  return (
      <form onSubmit={handleSubmit} className="relative md:mt-0">
      <input
        name="search"
          className="w-full md:w-[230px] p-3 md:p-[14px] rounded-[30px] border border-border-black bg-white text-[14px] leading-[129%] text-opacity-black outline-none"
          placeholder="Search"
      />
      <button className="w-[18px] h-[18px] absolute top-3 md:top-[14px] right-3 md:right-[14px]">
        <svg className="w-[18px] h-[18px]">
          <use href={sprite + "#icon-search"} />
        </svg>
      </button>
      </form>
  );
};

export default SearchField;
