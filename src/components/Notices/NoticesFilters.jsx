import SearchField from "../News/SearchField";
import sprite from "../../assets/images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Select from 'react-select';
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

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const petSex = useSelector(selectPetSex);
  const petTypes = useSelector(selectPetTypes);
  const cities = useSelector(selectCities);

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
    
    
    
    const options = cities?.map(city => ({label: `${city.stateEn}, ${city.cityEn}`, value: city._id}))
    // console.log(options)
  return (
    <div className="my-10 rounded-[30px] bg-[#fff4df] p-5">
      <div className="flex flex-col gap-3 pb-5 border-b border-b-black-main border-opacity-10">
        <SearchField />
        <div className="grid grid-cols-2 gap-2">
          <select
            className="p-3 rounded-[30px] bg-white outline-none text-[14px] leading-[129%]"
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
          <select
            className="p-3 rounded-[30px] bg-white outline-none text-[14px] leading-[129%]"
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
        </div>
        <select
          className="p-3 rounded-[30px] bg-white outline-none text-[14px] leading-[129%]"
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
        {/* <div className="relative">
          <input
            name="search"
            className="w-full md:w-[230px] p-3 md:p-[14px] rounded-[30px] border border-border-black bg-white text-[14px] leading-[129%] placeholder:text-black-main text-black-main outline-none"
            placeholder="Location"
          />
          <button className="w-[18px] h-[18px] absolute top-3 md:top-[14px] right-3 md:right-[14px]">
            <svg className="w-[18px] h-[18px]">
              <use href={sprite + "#icon-search"} />
            </svg>
          </button>
        </div> */}
              <Select options={options} placeholder="Location"/>
      </div>
    </div>
  );
};

export default NoticesFilters;
