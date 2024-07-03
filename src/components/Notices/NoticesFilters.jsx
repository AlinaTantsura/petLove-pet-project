import SearchField from "../News/SearchField";
import sprite from "../../assets/images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  getCategories,
  getCities,
  getPetSex,
  getPetType,
} from "../../redux/notices/noticesOperations";
import {
  selectCategories,
  selectCities,
  selectPetSex,
  selectPetTypes,
} from "../../redux/notices/noticesSelectors";
import clsx from "clsx";

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const petSex = useSelector(selectPetSex);
  const petTypes = useSelector(selectPetTypes);
  const cities = useSelector(selectCities);
  const [sortWord, setSortWord] = useState("");
  const radioButtons = [
    { value: "popular", label: "Popular" },
    { value: "unpopular", label: "Unpopular" },
    { value: "cheap", label: "Cheap" },
    { value: "expensive", label: "Expensive" },
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
    if (!petSex) {
      dispatch(getPetSex());
    }
    if (!petTypes) {
      dispatch(getPetType());
    }
  }, [dispatch, categories, petSex, petTypes]);

  const options = cities?.map((city) => ({
    label: `${city.stateEn}, ${city.cityEn}`,
    value: city._id,
  }));
  // console.log(options)
  // console.log(sortWord)
  return (
    <div className="my-10 rounded-[30px] bg-[#fff4df] p-5 md:py-10 md:px-8">
      <ul className="flex flex-wrap gap-3 md:gap-4 pb-5 border-b border-b-black-main border-opacity-10">
        <li>
          <SearchField />
        </li>
        <li className="relative w-[50%] md:w-[170px] xl:w-[200px]">
          <select
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className=" p-3 md:p-[14px] flex-1 rounded-[30px] w-full bg-white outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] appearance-none"
            name="category"
          >
            <option value="">Category</option>
            {categories &&
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          <svg
            className={clsx(
              "absolute top-3 right-3 w-[18px] h-[18px] pointer-events-none",
              isOpenMenu && "rotate-180"
            )}
          >
            <use href={sprite + "#icon-chevron-down"} />
          </svg>
        </li>
        <li className="relative w-[143px] md:w-[170px] xl:w-[190px]">
          <select
            className="p-3 md:p-[14px] flex-1 rounded-[30px] w-full bg-white outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] appearance-none"
            name="gender"
          >
            <option value="">By gender</option>
            {petSex &&
              petSex.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          <svg
            className={clsx(
              "absolute top-3 right-3 w-[18px] h-[18px] pointer-events-none",
              isOpenMenu && "rotate-180"
            )}
          >
            <use href={sprite + "#icon-chevron-down"} />
          </svg>
        </li>
        <li>
          <select
            className="w-full md:w-[190px] p-3 md:p-[14px] rounded-[30px] bg-white outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] appearance-none"
            name="type"
          >
            <option value="">By type</option>
            {petTypes &&
              petTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
          </select>
        </li>
        <li>
          <Select options={options} placeholder="Location" />
        </li>
      </ul>
      <ul className="mt-5 flex flex-wrap gap-[10px]">
        {radioButtons.map((btn) => (
          <li key={btn.value}>
            <input
              className="hidden peer"
              name="sort"
              type="radio"
              value={btn.value}
              id={btn.value}
              checked={sortWord === btn.value}
              onChange={(e) => setSortWord(e.target.value)}
            />
            <label
              className="p-3 rounded-[30px] bg-white text-[14px] leading-[129%] inline-flex items-center justify-center cursor-pointer peer-checked:bg-orange-main peer-checked:text-white hover:bg-slate-100"
              htmlFor={btn.value}
            >
              {btn.label}
              {sortWord === btn.value && (
                <button
                  onClick={() => {
                    setSortWord("");
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
        {/* <li>
          <input
            onChange={(e) => { console.log(e)}}
            className="hidden peer"
            type="radio"
            id="popular"
            name="sort"
            value="popular"
          />
          <label
            className="p-3 rounded-[30px] bg-white text-[14px] leading-[129%] inline-flex items-center justify-center cursor-pointer peer-checked:bg-orange-main peer-checked:text-white hover:bg-slate-100"
            htmlFor="popular"
          >
            Popular
            {sortWord === "popular" && (
              <button
                onClick={() => {document.getElementById(`${sortWord}`).removeAttribute("checked"); setSortWord("")}}
                className="w-[18px] h-[18px]"
              >
                <svg className="w-[18px] h-[18px] stroke-white">
                  <use href={sprite + "#icon-x"} />
                </svg>
              </button>
            )}
          </label>
        </li>
        <li>
          <input
            onChange={(e) => setSortWord(e.target.value)}
            className="hidden peer"
            type="radio"
            id="unpopular"
            name="sort"
            value="unpopular"
          />
          <label
            className="p-3 rounded-[30px] bg-white text-[14px] leading-[129%] inline-flex items-center justify-center gap-[6px] cursor-pointer peer-checked:bg-orange-main peer-checked:text-white hover:bg-slate-100"
            htmlFor="unpopular"
          >
            Unpopular
            {sortWord === "unpopular" && (
              <button
                onClick={() => setSortWord("")}
                className="w-[18px] h-[18px]"
              >
                <svg className="w-[18px] h-[18px] stroke-white">
                  <use href={sprite + "#icon-x"} />
                </svg>
              </button>
            )}
          </label>
        </li>
        <li>
          <input
            onChange={(e) => setSortWord(e.target.value)}
            className="hidden peer"
            type="radio"
            id="cheap"
            name="sort"
            value="cheap"
          />
          <label
            className="p-3 rounded-[30px] bg-white text-[14px] leading-[129%] inline-flex items-center justify-center cursor-pointer peer-checked:bg-orange-main peer-checked:text-white hover:bg-slate-100"
            htmlFor="cheap"
          >
            Cheap
            {sortWord === "cheap" && (
              <button
                onClick={() => setSortWord("")}
                className="w-[18px] h-[18px]"
              >
                <svg className="w-[18px] h-[18px] stroke-white">
                  <use href={sprite + "#icon-x"} />
                </svg>
              </button>
            )}
          </label>
        </li>
        <li>
          <input
            onChange={(e) => setSortWord(e.target.value)}
            className="hidden peer"
            type="radio"
            id="expensive"
            name="sort"
            value="expensive"
          />
          <label
            className="p-3 rounded-[30px] bg-white text-[14px] leading-[129%] inline-flex items-center justify-center cursor-pointer peer-checked:bg-orange-main peer-checked:text-white hover:bg-slate-100"
            htmlFor="expensive"
          >
            Expensive
            {sortWord === "expensive" && (
              <button
                onClick={() => setSortWord("")}
                className="w-[18px] h-[18px]"
              >
                <svg className="w-[18px] h-[18px] stroke-white">
                  <use href={sprite + "#icon-x"} />
                </svg>
              </button>
            )}
          </label>
        </li> */}
      </ul>
    </div>
  );
};

export default NoticesFilters;
