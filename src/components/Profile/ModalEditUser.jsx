/* eslint-disable react/prop-types */
import * as yup from "yup";
import ModalWindow from "../ModalWindow";
import sprite from "../../assets/images/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import Button from "../Button";

const editUserSchema = yup.object().shape({
  name: yup.string(),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    ),
  avatar: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Enter a valid URL"
    ),
  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, "Phone number must be in format +380123456789"),
});

const ModalEditUser = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editUserSchema) });
  return (
    <ModalWindow open={open} onClose={onClose}>
      <form className="px-5 py-10 md:p-[50px]">
        <h2 className="mb-5 font-bold text-[20px] md:text-[18px] leading-[100%] md:leading-[133%] text-[#2b2b2a]">
          Edit information
        </h2>
        <div className="mb-3 m-auto w-[80px] h-[80px] md:w-[86px] md:h-[86px] rounded-full bg-[#fff4df] flex justify-center items-center">
          <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
            <use href={sprite + "#icon-user-02"} />
          </svg>
        </div>
        <ul className="w-[295px] md:w-[380px] mb-5 md:mb-10 flex flex-col gap-[10px] md:gap-[14px]">
          <li className="flex gap-2 md:mb-[6px]">
            <div className="relative w-[161px] md:w-[226px]">
              <input
                className={clsx(
                  "w-full px-3 py-[13px] md:p-3 border border-border-black rounded-[30px] outline-none text-[12px] md:text-[14px] leading-[133%] md:leading-[129%] tracking-[-0.02em]",
                  errors.name && "border-error-color"
                )}
                type="text"
                placeholder="Avatar URL"
                {...register("avatar")}
              />
              {errors.name && (
                <>
                  <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[12px] md:right-[19px] ">
                    <use href={sprite + "#icon-cross-small"} />
                  </svg>
                  <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                    {errors.avatar.message}
                  </span>
                </>
              )}
            </div>
            <button className="md:w-[146px] rounded-[30px] bg-[#fff4df] p-3 flex gap-2 items-center justify-center text-[12px] md:text-[14px] leading-[133%] md:leading-[129%] tracking-[-0.02em]">
              Upload photo
              <svg className="w-[18px] h-[18px]">
                <use href={sprite + "#icon-upload-cloud"} />
              </svg>
            </button>
          </li>
          <li className="relative">
            <input
              className={clsx(
                "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] placeholder:text-black-main",
                errors.name && "border-error-color"
              )}
              type="text"
              placeholder="Name"
              {...register("name")}
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
          <li className="relative">
            <input
              className={clsx(
                "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] placeholder:text-black-main",
                errors.email && "border-error-color"
              )}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <>
                <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[12px] md:right-[19px] ">
                  <use href={sprite + "#icon-cross-small"} />
                </svg>
                <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                  {errors.email.message}
                </span>
              </>
            )}
          </li>
          <li className="relative">
            <input
              className={clsx(
                "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] placeholder:text-black-main",
                errors.email && "border-error-color"
              )}
              type="phone"
              placeholder="+380"
              {...register("phone")}
            />
            {errors.phone && (
              <>
                <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[12px] md:right-[19px] ">
                  <use href={sprite + "#icon-cross-small"} />
                </svg>
                <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                  {errors.phone.message}
                </span>
              </>
            )}
          </li>
              </ul>
              <Button className="w-full py-3 px-auto bg-orange-main rounded-[30px] text-white font-bold text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">Go to profile</Button>
      </form>
    </ModalWindow>
  );
};

export default ModalEditUser;
