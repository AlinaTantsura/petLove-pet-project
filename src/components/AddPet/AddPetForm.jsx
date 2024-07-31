import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import sprite from "../../assets/images/sprite.svg";
import clsx from "clsx";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CalendarBox from "./CalendarBox.jsx";
import PetTypeMenu from "./PetTypeMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectPetTypes } from "../../redux/notices/noticesSelectors.js";
import { getPetType } from "../../redux/notices/noticesOperations.js";
import { addPet } from "../../redux/auth/authOperations.js";

const addPetSchema = yup.object().shape({
  title: yup.string().required(),
  name: yup.string().required(),
  imgURL: yup
    .string()
    .required()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, "URL doesn't match"),
  species: yup.string().required(),
  birthday: yup
    .string()
    .required()
    .matches(/^\d{4}-\d{2}-\d{2}$/),
  sex: yup.string().required(),
});

const AddPetForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const types = useSelector(selectPetTypes);
  const [sex, setSex] = useState();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openPetTypeMenu, setOpenPetTypeMenu] = useState(false);
  const [type, setType] = useState("");
  const [urlFieldValue, setUrlFieldValue] = useState("");
  const [titleFieldValue, setTitleFieldValue] = useState("");
  const [nameFieldValue, setNameFieldValue] = useState("");
  const [date, setDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addPetSchema) });

  useEffect(() => {
    if (!types) dispatch(getPetType());
  }, [dispatch, types]);

  const onSubmit = (data) => {
    data.species = data.species.toLowerCase();
    dispatch(addPet(data));
    navigate("/profile")
  };
  return (
    <section className="xl:w-[592px] bg-white rounded-[30px] md:rounded-[60px] p-4 pt-[25px] md:py-10 md:px-[136px] xl:py-[60px] xl:px-[80px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-6 md:mb-10 font-bold text-[28px] md:text-[32px] leading-[100%] flex gap-2 items-end">
          Add my pet /
          <span className="text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-[#2B2B2A] text-opacity-40">
            Personal details
          </span>
        </h2>
        <div className="relative mb-2 md:mb-[-22px] flex gap-2">
          <input
            className="hidden"
            {...register("sex", {
              onChange: (e) => setSex(e.nativeEvent.target.value),
            })}
            value="female"
            type="radio"
            id="female"
          />
          <label
            htmlFor="female"
            className={clsx(
              "w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F43F5E] flex justify-center items-center",
              sex === "female" ? "bg-opacity-1" : "bg-opacity-10"
            )}
          >
            <svg
              className={clsx(
                "w-5 h-5 md:w-6 md:h-6",
                sex === "female" ? "stroke-white" : "stroke-[#F43F5E]"
              )}
            >
              <use href={sprite + "#icon-female"} />
            </svg>
          </label>
          <input
            className="hidden"
            {...register("sex")}
            value="male"
            type="radio"
            id="male"
          />
          <label
            htmlFor="male"
            className={clsx(
              "w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#54ADFF] flex justify-center items-center",
              sex === "male" ? "bg-opacity-1" : "bg-opacity-10"
            )}
          >
            <svg
              className={clsx(
                "w-5 h-5 md:w-6 md:h-6",
                sex === "male" ? "stroke-white" : "stroke-[#54ADFF]"
              )}
            >
              <use href={sprite + "#icon-male"} />
            </svg>
          </label>
          <input
            className="hidden"
            {...register("sex")}
            value="unknown"
            type="radio"
            id="unknown"
          />
          <label
            htmlFor="unknown"
            className={clsx(
              "w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-main flex justify-center items-center",
              sex === "unknown" ? "bg-opacity-1" : "bg-opacity-10"
            )}
          >
            <svg
              className={clsx(
                "w-5 h-5 md:w-6 md:h-6",
                sex === "unknown" ? "fill-white" : "fill-orange-main"
              )}
            >
              <use
                href={sprite + "#icon-healthicons_sexual-reproductive-health"}
              />
            </svg>
          </label>
          {errors.sex && (
              
                <span className="absolute left-0 top-[48px] ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                  {errors.sex.message}
                </span>
            
            )}
        </div>
        <div className="mx-auto mb-4 md:mb-3 w-[68px] md:w-[86px] h-[68px] md:h-[86px] rounded-full bg-[#fff4df] flex justify-center items-center">
          <svg className="w-[34px] h-[34px] md:w-[44px] md:h-[44px]">
            <use href={sprite + "#icon-icons8_cat-footprint"} />
          </svg>
        </div>
        <ul className="flex flex-col gap-[10px] md:gap-[18px]">
          <li className="flex gap-2">
            <div className="relative w-[170px] md:w-[278px]">
              <input
                className={clsx(
                  "w-full px-[10px] pr-[40px] py-[9px] md:p-3 md:pr-[45px] border border-border-black rounded-[30px] outline-none text-[14px] leading-[129%] tracking-[-0.02em] placeholder:text-black-main placeholder:text-opacity-50",
                  !errors.imgURL &&
                    urlFieldValue !== "" &&
                    "border-orange-main",
                  errors.imgURL && "border-error-color"
                )}
                type="text"
                placeholder="Enter URL"
                {...register("imgURL", {
                  onChange: (e) => setUrlFieldValue(e.target.value),
                })}
              />
              {errors.imgURL && (
                <>
                  <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[10px] right-[12px] md:right-[16px]">
                    <use href={sprite + "#icon-cross-small"} />
                  </svg>
                  <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                    {errors.imgURL.message}
                  </span>
                </>
              )}
            </div>
            <button type="button" className="rounded-[30px] h-[36px] md:h-[42px] bg-[#fff4df] p-[10px] md:px-4 md:py-3 flex gap-[5px] items-center justify-center text-[12px] md:text-[14px] leading-[133%] md:leading-[129%] tracking-[-0.02em] text-black-main">
              Upload photo
              <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]">
                <use href={sprite + "#icon-upload-cloud"} />
              </svg>
            </button>
          </li>
          <li className="relative">
            <input
              className={clsx(
                "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] placeholder:text-black-main placeholder:text-opacity-50",
                (titleFieldValue !== "" && !errors.title) && "border-orange-main",
                errors.title && "border-error-color"
              )}
              type="text"
              placeholder="Title"
              {...register("title", {onChange: (e) => setTitleFieldValue(e.target.value)})}
            />
            {errors.title && (
              <>
                <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[12px] md:right-[19px] placeholder:text-black-main">
                  <use href={sprite + "#icon-cross-small"} />
                </svg>
                <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                  {errors.title.message}
                </span>
              </>
            )}
          </li>
          <li className="relative">
            <input
              className={clsx(
                "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] placeholder:text-black-main placeholder:text-opacity-50",
                (nameFieldValue !== "" && !errors.name) && "border-orange-main",
                errors.name && "border-error-color"
              )}
              type="text"
              placeholder="Pet's Name"
              {...register("name", {onChange: (e) => setNameFieldValue(e.target.value)})}
            />
            {errors.name && (
              <>
                <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[12px] md:right-[19px] placeholder:text-black-main">
                  <use href={sprite + "#icon-cross-small"} />
                </svg>
                <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                  {errors.name.message}
                </span>
              </>
            )}
          </li>
          <li className="flex gap-2 md:gap-3">
            <div className="relative min-w-[144px]">
              {/* <input
                className={clsx(
                  "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] placeholder:text-black-main placeholder:text-opacity-50",
                  // userData.name && "border-orange-main",
                  errors.name && "border-error-color"
                )}
                type="text"
                placeholder="00.00.0000"
                {...register("birthday")}
              />
              <svg className="w-[18px] h-[18px] md:w-5 md:h-5 absolute top-3 md:top-4 right-3 md:right-4">
                <use href={sprite + "#icon-calendar"} />
              </svg> */}
              <input
                className={clsx(
                  "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] placeholder:text-black-main placeholder:text-opacity-50 cursor-default",
                  // userData.name && "border-orange-main",
                  errors.birthday ? "border-error-color" : "border-orange-main",
                  "date-input"
                )}
                type="text"
                placeholder="0000-00-00"
                value={`${date.getFullYear()}-${
                  date.getMonth() > 8
                    ? date.getMonth() + 1
                    : "0" + (date.getMonth() + 1)
                }-${
                  date.getDate() > 9 ? date.getDate() : "0" + date.getDate()
                }`}
                onClick={() => setOpenCalendar(!openCalendar)}
                {...register("birthday")}
              />
              <svg className="w-[18px] h-[18px] md:w-5 md:h-5 absolute top-3 md:top-4 right-3 md:right-4 pointer-events-none">
                <use href={sprite + "#icon-calendar"} />
              </svg>
              <CalendarBox open={openCalendar} date={date} setDate={setDate} />
            </div>
            <div className="relative">
              <input
                type="text"
                onClick={() => setOpenPetTypeMenu(!openPetTypeMenu)}
                className="w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] placeholder:text-black-main placeholder:text-opacity-50 cursor-default"
                placeholder="Type of pet"
                value={type}
                {...register("species")}
              />
              <svg
                className={clsx(
                  "w-[18px] h-[18px] md:w-5 md:h-5 absolute top-3 md:top-[18px] right-3 md:right-4 pointer-events-none",
                  openPetTypeMenu && "rotate-180"
                )}
              >
                <use href={sprite + "#icon-chevron-down"} />
              </svg>
              <PetTypeMenu
                open={openPetTypeMenu}
                types={types}
                onClose={() => setOpenPetTypeMenu(false)}
                setType={setType}
              />
            </div>
          </li>
        </ul>
        <div className="mt-[31px] md:mt-[46px] xl:mt-[40px] flex gap-2 justify-end">
          <Button
            onClick={() => navigate("/profile")}
            className="rounded-[30px] px-[34px] md:px-[67px] py-3 md:py-[14px] bg-black-main bg-opacity-5 font-bold text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-black-main"
            type="button"
          >
            Back
          </Button>
          <Button
            className="rounded-[30px] px-[26px] md:px-[58px] py-3 md:py-[14px] bg-orange-main font-bold text-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddPetForm;
