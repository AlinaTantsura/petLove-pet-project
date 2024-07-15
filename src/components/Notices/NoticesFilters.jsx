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
  selectSexValue,
} from "../../redux/notices/noticesSelectors";
import clsx from "clsx";
import { changeSexValue } from "../../redux/notices/noticesSlice";
import SortBox from "./SortBox";

const NoticesFilters = ({
  setSearchWord,
  setCategory,
  category,
  type,
  setType,
  setLocation,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const petSex = useSelector(selectPetSex);
  const petTypes = useSelector(selectPetTypes);
  const cities = useSelector(selectCities);
  const gender = useSelector(selectSexValue);
  // const [currentCityId, setCurrentCityId] = useState(null)
  const [currentCity, setCurrentCity] = useState("");
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenGenders, setIsOpenGenders] = useState(false);
  const [isOpenTypes, setIsOpenTypes] = useState(false);

  // const radioButtons = [
  //   { value: "popular", label: "Popular" },
  //   { value: "unpopular", label: "Unpopular" },
  //   { value: "cheap", label: "Cheap" },
  //   { value: "expensive", label: "Expensive" },
  // ];

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

  useEffect(() => {
    if (!cities) {
      dispatch(getCities());
    }
  }, [dispatch, cities]);

  const options = cities
    ?.map((city) => ({
      label: `${city.stateEn}, ${city.cityEn}`,
      value: city._id,
    }))
    .filter((city) => city.label.includes(currentCity ? currentCity : "Krym"));

  const handleSelectCategory = (value) => {
    if (value !== category) {
      setIsOpenCategories(false);
      setCategory(value);
    }
  };
  const handleSelectGender = (value) => {
    if (value !== gender) {
      setIsOpenGenders(false);
      dispatch(changeSexValue(value));
    }
  };
  const handleSelectType = (value) => {
    if (value !== type) {
      setIsOpenTypes(false);
      setType(value);
    }
  };
  const getValue = () => {
    return currentCity ? options.find((city) => city.value === currentCity) : "";
  };
  const onChange = (e) => {
    setCurrentCity(e.value)
  };

  const handleInputChange = (inputValue, { action }) => {
    if (action === "input-change") {
      const inputValueToUpperCase =
        inputValue[0]?.toUpperCase() + inputValue.slice(1);
      setCurrentCity(inputValueToUpperCase);
    }
  };
  
  // console.log(sortWord);
  return (
    <div className="my-10 rounded-[30px] bg-[#fff4df] p-5 md:py-10 md:px-8 xl:p-10">
      <ul className="flex flex-wrap gap-x-2 gap-y-3 md:gap-4 pb-5 border-b border-b-black-main border-opacity-10">
        <li className="w-full md:w-[265px]">
          <SearchField setSearchWord={setSearchWord} />
        </li>
        <li className="relative w-[calc(50%-4px)] md:w-[170px] xl:w-[200px]">
          <button
            onClick={() => setIsOpenCategories(!isOpenCategories)}
            className="p-3 md:p-[14px] flex-1 rounded-[30px] w-full bg-white outline-none placeholder:text-black-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] cursor-pointer text-start"
          >
            {category === "all"
              ? "Category"
              : category[0].toUpperCase() + category.slice(1)}
          </button>
          {isOpenCategories && (
            <ul className="absolute z-10 top-[45px] md:top-[52px] w-full rounded-[15px] bg-white p-3 md:p-[14px] flex flex-col gap-2 text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
              <li
                onClick={() => handleSelectCategory("all")}
                className={clsx(
                  "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                  category === "all" && "text-orange-main"
                )}
              >
                Show all
              </li>
              {categories &&
                categories.map((categoryItem) => (
                  <li
                    onClick={() => handleSelectCategory(categoryItem)}
                    className={clsx(
                      "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                      categoryItem === category && "text-orange-main"
                    )}
                    key={categoryItem}
                  >
                    {categoryItem[0].toUpperCase() + categoryItem.slice(1)}
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
            {gender === "all"
              ? "By gender"
              : gender[0].toUpperCase() + gender.slice(1)}
          </button>
          {isOpenGenders && (
            <ul className="absolute z-10 top-[45px] md:top-[52px] w-full rounded-[15px] bg-white p-3 md:p-[14px] flex flex-col gap-2 text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
              <li
                onClick={() => handleSelectGender("all")}
                className={clsx(
                  "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                  gender === "all" && "text-orange-main"
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
                      gender === sex && "text-orange-main"
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
            {type === "all" ? "By type" : type[0].toUpperCase() + type.slice(1)}
          </button>
          {isOpenTypes && (
            <div className="absolute z-10 top-[45px] md:top-[52px] w-full h-[216px] rounded-[15px] bg-white p-3 md:p-[14px] ">
              <ul
                className={clsx(
                  "h-full overflow-scroll flex flex-col gap-2 text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
                  "types-menu"
                )}
              >
                <li
                  onClick={() => handleSelectType("all")}
                  className={clsx(
                    "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                    type === "all" && "text-orange-main"
                  )}
                >
                  Show all
                </li>
                {petTypes &&
                  petTypes.map((typeItem) => (
                    <li
                      onClick={() => handleSelectType(typeItem)}
                      className={clsx(
                        "text-black-main text-opacity-60 cursor-pointer hover:font-bold",
                        type === typeItem && "text-orange-main"
                      )}
                      key={typeItem}
                    >
                      {typeItem[0].toUpperCase() + typeItem.slice(1)}
                    </li>
                  ))}
              </ul>
            </div>
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
        <li className="relative w-full md:w-[227px]">
          <Select
            onChange={onChange}
            onInputChange={handleInputChange}
            value={getValue()}
            classNamePrefix="custom-select"
            options={options}
            placeholder="Location"
          />
          {currentCity && (
        <button
          onClick={() => {
                setCurrentCity("");
                setLocation("");
          }}
          className="w-[20px] h-[18px] absolute top-[12px] px-[1px] md:top-[16px] right-[34px] md:right-[36px] bg-white"
        >
          <svg className="w-full h-full stroke-black-main">
            <use href={sprite + "#icon-x"} />
          </svg>
        </button>
      )}
          <button
            onClick={()=>setLocation(currentCity)}
            className="w-[22px] h-[18px] px-[2px] absolute top-[12px] md:top-[16px] right-3 md:right-[14px] bg-white">
            <svg className="w-full h-full">
              <use href={sprite + "#icon-search"} />
            </svg>
          </button>
        </li>
      </ul>
      <SortBox setCategory={setCategory} setType={setType} setLocation={setLocation} />
      {/* <ul className="mt-5 flex flex-wrap gap-[10px]">
        {radioButtons.map((btn) => (
          <li key={btn.value}>
            <input
              className="hidden"
              name="sort"
              type="radio"
              value={btn.value}
              id={btn.value}
              checked={sortWord === btn.value}
              // onChange={(e) => setSortWord(e.target.value)}
              onChange={(e) => {dispatch(changeSortWord(e.target.value))}}
            />
            <label
              className={clsx("p-3 rounded-[30px] text-[14px] leading-[129%] inline-flex items-center justify-center cursor-pointer",
                sortWord === btn.value ? "bg-orange-main text-white" : "bg-white hover:bg-slate-100" 
              )}
              htmlFor={btn.value}
            >
              {btn.label}
              {sortWord === btn.value && (
                <button
                  onClick={() => {
                    dispatch(changeSortWord(null))
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
      </ul> */}
    </div>
  );
};

export default NoticesFilters;
