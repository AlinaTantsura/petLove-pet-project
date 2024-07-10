/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
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

const NoticesFilters = ({ setSearchWord }) => {
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
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenGenders, setIsOpenGenders] = useState(false);
  const [isOpenTypes, setIsOpenTypes] = useState(false);
  const [categoryValue, setCategoryValue] = useState("all"); 
  const [genderValue, setGenderValue] = useState("all"); 
  const [typeValue, setTypeValue] = useState("all");

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

  const handleSelectCategory = (value) => {
    if (value !== categoryValue) {
      setIsOpenCategories(false);
      setCategoryValue(value);
    }
  };
  const handleSelectGender = (value) => {
    if (value !== genderValue) {
      setIsOpenGenders(false);
      setGenderValue(value);
    }
  };
  const handleSelectType = (value) => {
    if (value !== typeValue) {
      setIsOpenTypes(false);
      setTypeValue(value);
    }
  };
  // console.log(categoryValue);
  // console.log(sortWord)
  return (
    <div className="my-10 rounded-[30px] bg-[#fff4df] p-5 md:py-10 md:px-8">
      <ul className="flex flex-wrap gap-x-2 gap-y-3 md:gap-4 pb-5 border-b border-b-black-main border-opacity-10">
        <li className="w-full md:w-[265px]">
          <SearchField setSearchWord={setSearchWord} />
        </li>
        <li className="relative w-[calc(50%-4px)] md:w-[170px] xl:w-[200px]">
          <button
            onClick={() => setIsOpenCategories(!isOpenCategories)}
            className="p-3 md:p-[14px] flex-1 rounded-[30px] w-full bg-white outline-none placeholder:text-black-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] cursor-pointer text-start"
          >
            {
              categoryValue === "all"
                ? "Category"
                : categoryValue[0].toUpperCase() + categoryValue.slice(1)
            }
          </button>
          {isOpenCategories && (
            <ul className="absolute z-10 top-[45px] md:top-[52px] w-full rounded-[15px] bg-white p-3 md:p-[14px] flex flex-col gap-2 text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
              <li
                onClick={() => handleSelectCategory("all")}
                className={clsx(
                  "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                  categoryValue === "all" && "text-orange-main hover:font-normal"
                )}
              >
                Show all
              </li>
              {categories &&
                categories.map((category) => (
                  <li
                    onClick={() => handleSelectCategory(category)}
                    className={clsx(
                      "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                      categoryValue === category && "text-orange-main hover:font-normal"
                    )}
                    key={category}
                  >
                    {category[0].toUpperCase() + category.slice(1)}
                  </li>
                ))}
            </ul>
          )}
          <svg
            className={clsx(
              "absolute top-3 md:top-4 right-3 w-[18px] h-[18px] pointer-events-none",
              isOpenCategories && "rotate-180"
            )}
          >
            <use href={sprite + "#icon-chevron-down"} />
          </svg>
        </li>
        <li className="relative w-[calc(50%-4px)] md:w-[170px] xl:w-[190px]">
          <button
            onClick={() => setIsOpenGenders(!isOpenGenders)}
            className="p-3 md:p-[14px] flex-1 rounded-[30px] w-full bg-white outline-none placeholder:text-black-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] cursor-pointer text-start"
          >
            {
              genderValue === "all"
                ? "By gender"
                : genderValue[0].toUpperCase() + genderValue.slice(1)
            }
          </button>
          {isOpenGenders && (
            <ul className="absolute z-10 top-[45px] md:top-[52px] w-full rounded-[15px] bg-white p-3 md:p-[14px] flex flex-col gap-2 text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
              <li
                onClick={() => handleSelectGender("all")}
                className={clsx(
                  "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                  categoryValue === "all" && "text-orange-main hover:font-normal"
                )}
              >
                Show all
              </li>
              {petSex &&
                petSex.map((sex) => (
                  <li
                    onClick={() => handleSelectGender(sex)}
                    className={clsx(
                      "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                      genderValue === sex && "text-orange-main hover:font-normal"
                    )}
                    key={sex}
                  >
                    {sex[0].toUpperCase() + sex.slice(1)}
                  </li>
                ))}
            </ul>
          )}
          <svg
            className={clsx(
              "absolute top-3 md:top-4 right-3 w-[18px] h-[18px] pointer-events-none",
              isOpenGenders && "rotate-180"
            )}
          >
            <use href={sprite + "#icon-chevron-down"} />
          </svg>
        </li>
        <li className="relative w-full md:w-[190px]">
          <button
            onClick={() => setIsOpenTypes(!isOpenTypes)}
            className="p-3 md:p-[14px] flex-1 rounded-[30px] w-full bg-white outline-none placeholder:text-black-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] cursor-pointer text-start"
          >
            {
              typeValue === "all"
                ? "By type"
                : typeValue[0].toUpperCase() + typeValue.slice(1)
            }
          </button>
          {isOpenTypes && (
            <ul className="absolute z-10 top-[45px] md:top-[52px] w-full h-[216px] overflow-scroll rounded-[15px] bg-white p-3 md:p-[14px] flex flex-col gap-2 text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
              <li
                onClick={() => handleSelectType("all")}
                className={clsx(
                  "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                  typeValue === "all" && "text-orange-main hover:font-normal"
                )}
              >
                Show all
              </li>
              {petTypes &&
                petTypes.map((type) => (
                  <li
                    onClick={() => handleSelectType(type)}
                    className={clsx(
                      "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                      typeValue === type && "text-orange-main hover:font-normal"
                    )}
                    key={type}
                  >
                    {type[0].toUpperCase() + type.slice(1)}
                  </li>
                ))}
            </ul>
          )}
          <svg
            className={clsx(
              "absolute top-3 md:top-4 right-3 w-[18px] h-[18px] pointer-events-none",
              isOpenTypes && "rotate-180"
            )}
          >
            <use href={sprite + "#icon-chevron-down"} />
          </svg>
        </li>
        {/* <li className="relative w-[143px] md:w-[170px] xl:w-[190px]">
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
              "absolute top-3 md:top-4 right-3 w-[18px] h-[18px] pointer-events-none"
              // isOpenMenu && "rotate-180"
            )}
          >
            <use href={sprite + "#icon-chevron-down"} />
          </svg>
        </li>
        <li className="relative">
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
          <svg
            className={clsx(
              "absolute top-3 md:top-4 right-3 w-[18px] h-[18px] pointer-events-none"
              // isOpenMenu && "rotate-180"
            )}
          >
            <use href={sprite + "#icon-chevron-down"} />
          </svg>
        </li> */}
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
