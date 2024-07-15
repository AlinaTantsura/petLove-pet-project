/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { selectSortWord } from "../../redux/notices/noticesSelectors";
import {
  changeSexValue,
  changeSortWord,
} from "../../redux/notices/noticesSlice";
import clsx from "clsx";
import sprite from "../../assets/images/sprite.svg";
import { useEffect } from "react";

const SortBox = ({setCategory, setType, setLocation}) => {
  const dispatch = useDispatch();
  const sortWord = useSelector(selectSortWord);

  const radioButtons = [
    { value: "popular", label: "Popular" },
    { value: "unpopular", label: "Unpopular" },
    { value: "cheap", label: "Cheap" },
    { value: "expensive", label: "Expensive" },
  ];
  useEffect(() => {}, [sortWord]);
  return (
    <ul className="mt-5 flex flex-wrap gap-[10px]">
      {radioButtons.map((btn) => (
        <li key={btn.value}>
          <input
            className="hidden"
            name="sort"
            type="radio"
            value={btn.value}
            id={btn.value}
            // checked={sortWord === btn.value}
            onChange={() => {
            //   dispatch(changeSortWord(e.target.value));
              dispatch(changeSortWord(btn.value));
            }}
          />
          <label
            className={clsx(
              "p-3 rounded-[30px] text-[14px] leading-[129%] inline-flex items-center justify-center cursor-pointer",
              sortWord === btn.value
                ? "bg-orange-main text-white"
                : "bg-white hover:bg-slate-100"
            )}
            htmlFor={btn.value}
          >
            {btn.label}
            {sortWord === btn.value && (
              <button
                onClick={() => {
                  dispatch(changeSortWord(null));
                  dispatch(changeSexValue("all"));
                  setCategory("all");
                  setType("all");
                  setLocation("");
                }}
                className="w-[18px] h-[18px]"
              >
                <svg className="w-[18px] h-[18px] stroke-white">
                  <use href={sprite + "#icon-x"} />
                </svg>
              </button>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default SortBox;
