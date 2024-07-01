import sprite from "../../assets/images/sprite.svg";

const SearchField = () => {
  return (
      <div className="relative mt-5 md:mt-0">
        <input
          className="w-full md:w-[230px] p-3 md:p-[14px] rounded-[30px] border border-border-black bg-white text-[14px] leading-[129%] text-opacity-black outline-none"
          placeholder="Search"
        />
        <svg className="w-[18px] h-[18px] absolute top-3 md:top-[14px] right-3 md:right-[14px]">
          <use href={sprite + "#icon-search"} />
        </svg>
      </div>
  );
};

export default SearchField;
