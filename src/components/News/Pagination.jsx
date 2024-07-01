/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import sprite from "../../assets/images/sprite.svg";
import { selectLastPage } from "../../redux/news/newsSelectors";

const Pagination = ({ setPage, page }) => {
  const lastPage = useSelector(selectLastPage);
  return (
    <div className="mt-[44px] md:mt-[88px] mb-[60px] md:mb-[48px] flex justify-center gap-[11px] md:gap-[24px]">
      <div className="flex gap-[6px] md:gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(1)}
          className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center"
        >
          <svg className="w-[7px] md:w-2 h-[12px] md:h-[14px] fill-opacity-black">
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
          <svg className="w-[7px] md:w-2 h-[12px] md:h-[14px] fill-opacity-black">
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
        </button>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center"
        >
          <svg className="w-[7px] md:w-2 h-[12px] md:h-[14px] fill-opacity-black">
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
        </button>
      </div>
      <div className="flex gap-[10px]">
        <div className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full bg-orange-main text-white flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]">
          1
        </div>
        <div className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]">
          2
        </div>
        <div className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center text-[16px] md:text-[20px] md:leading-[110%]">
          ...
        </div>
      </div>
      <div className="flex gap-[6px]">
        <button
          disabled={page === lastPage}
          onClick={() => setPage(page + 1)}
          className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-20 flex justify-center items-center"
        >
          <svg className="w-[7px] md:w-2 h-[12px] md:h-[14px] fill-black-main rotate-180">
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
        </button>
        <button
          disabled={page === lastPage}
          onClick={() => setPage(lastPage)}
          className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-20 flex justify-center items-center rotate-180"
        >
          <svg className="w-[7px] md:w-2 h-[12px] md:h-[14px] fill-black-main">
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
          <svg className="w-[7px] md:w-2 h-[12px] md:h-[14px] fill-black-main ">
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
