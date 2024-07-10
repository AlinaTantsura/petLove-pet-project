/* eslint-disable react/prop-types */
import sprite from "../../assets/images/sprite.svg";
import clsx from "clsx";

const Pagination = ({ setPage, page, lastPage }) => {
  const handleChangePage = (e) => {
    setPage(Number(e.target.innerText));
  };
  if (lastPage < 2) return null;
  return (
    <div className="mt-[44px] md:mt-[88px] mb-[60px] md:mb-[48px] flex justify-center gap-[11px] md:gap-[24px]">
      <div className="flex gap-[6px] md:gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(1)}
          className={clsx(
            "w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main flex justify-center items-center",
            page === 1 ? "border-opacity-5" : "border-opacity-20"
          )}
        >
          <svg
            className={clsx(
              "w-[7px] md:w-2 h-[12px] md:h-[14px]",
              page === 1 ? "fill-opacity-black" : "fill-black-main"
            )}
          >
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
          <svg
            className={clsx(
              "w-[7px] md:w-2 h-[12px] md:h-[14px]",
              page === 1 ? "fill-opacity-black" : "fill-black-main"
            )}
          >
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
        </button>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={clsx(
            "w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main flex justify-center items-center",
            page === 1 ? "border-opacity-5" : "border-opacity-20"
          )}
        >
          <svg
            className={clsx(
              "w-[7px] md:w-2 h-[12px] md:h-[14px]",
              page === 1 ? "fill-opacity-black" : "fill-black-main"
            )}
          >
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
        </button>
      </div>
      <div className="flex gap-[10px]">
        <div
          className={clsx(
            "flex justify-center items-center w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 text-[16px] md:text-[20px] md:leading-[110%]",
            (lastPage < 3 || page < lastPage - 2) && "hidden",
            (lastPage < 4 || page < lastPage - 3) && "md:hidden"
          )}
        >
          ...
        </div>
        {page === lastPage && (
          <button
            onClick={handleChangePage}
            className={clsx("w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 hidden md:flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]",
              (lastPage < 3) && "hidden",
              (lastPage < 4) && "md:hidden"
            )}
          >
            {page - 2}
          </button>
        )}
        {(page === lastPage - 1 || page === lastPage) && (
          <button
            onClick={handleChangePage}
            className={clsx(
              "w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]",
              (lastPage < 3 && page === 1) && "hidden",
              (lastPage < 4 && page === 1) && "md:hidden"
            )}
          >
            {page - 1}
          </button>
        )}
        <div className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full bg-orange-main text-white flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]">
          {page}
        </div>
        {page === lastPage - 1 && (
          <button
            onClick={handleChangePage}
            className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]"
          >
            {page + 1}
          </button>
        )}
        {page !== lastPage && page !== lastPage - 1 && (
          <>
            <button
              onClick={handleChangePage}
              className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]"
            >
              {page + 1}
            </button>
            <button
              onClick={handleChangePage}
              className="hidden w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 md:flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]"
            >
              {page + 2}
            </button>
          </>
        )}
        <div
          className={clsx(
            "w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center text-[16px] md:text-[20px] md:leading-[110%]",
            page >= lastPage - 2 && "hidden"
          )}
        >
          ...
        </div>
      </div>

      {/* {page === 1 ? (
        
      ) : (
        <div className="flex gap-[10px]">
          <div className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center text-[16px] md:text-[20px] md:leading-[110%]">
            ...
          </div>
          <div className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full bg-orange-main text-white flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]">
            {page}
          </div>
          <div className="hidden w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 md:flex justify-center items-center font-bold text-[14px] md:text-[18px] leading-[129%] md:leading-[122%]">
            {page + 1}
            </div>
            <div className="w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main border-opacity-5 flex justify-center items-center text-[16px] md:text-[20px] md:leading-[110%]">
            ...
          </div>
        </div>
      )} */}

      <div className="flex gap-[6px]">
        <button
          disabled={page === lastPage}
          onClick={() => setPage(page + 1)}
          className={clsx(
            "w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main flex justify-center items-center",
            page === lastPage ? "border-opacity-5" : "border-opacity-20"
          )}
        >
          <svg
            className={clsx(
              "w-[7px] md:w-2 h-[12px] md:h-[14px] rotate-180",
              page === lastPage ? "fill-opacity-black" : "fill-black-main"
            )}
          >
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
        </button>
        <button
          disabled={page === lastPage}
          onClick={() => setPage(lastPage)}
          className={clsx(
            "w-10 md:w-[44px] h-10 md:h-[44px] rounded-full border border-black-main flex justify-center items-center",
            page === lastPage ? "border-opacity-5" : "border-opacity-20"
          )}
        >
          <svg
            className={clsx(
              "w-[7px] md:w-2 h-[12px] md:h-[14px] rotate-180",
              page === lastPage ? "fill-opacity-black" : "fill-black-main"
            )}
          >
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
          <svg
            className={clsx(
              "w-[7px] md:w-2 h-[12px] md:h-[14px] rotate-180",
              page === lastPage ? "fill-opacity-black" : "fill-black-main"
            )}
          >
            <use href={sprite + "#icon-Vector-paginate"} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
