/* eslint-disable react/prop-types */
import * as yup from "yup";
import ModalWindow from "../ModalWindow";
import sprite from "../../assets/images/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import Button from "../Button";
import { editUserInfo } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

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
    // .oneOf([/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, ""], "Enter a valid URL"),
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      {excludeEmptyString: true},
      "Enter a valid URL"
    ),
  phone: yup
    .string()
    // .matches(/^\+38\d{10}$ | +380/, "Phone number must be in format +380123456789"),
    .matches(/^\+38\d{10}$/,{excludeEmptyString: true}, "Phone number must be in format +380123456789"),
});

const ModalEditUser = ({ open, onClose, userData }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editUserSchema) });
  // console.log(errors);
  const onSubmit = (data) => {
    // console.log(data)
    const editInfo = {}
    for (let key in data) {
      if(data[key] !== userData[key]) editInfo[key] = data[key]
    }
    dispatch(editUserInfo(editInfo));
    // console.log(editInfo)
  }
  return (
    <ModalWindow open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-10 md:p-[50px]">
        <h2 className="mb-5 font-bold text-[20px] md:text-[18px] leading-[100%] md:leading-[133%] text-[#2b2b2a]">
          Edit information
        </h2>
        <div className="mb-3 m-auto w-[80px] h-[80px] md:w-[86px] md:h-[86px] rounded-full bg-[#fff4df] flex justify-center items-center overflow-hidden">
          {userData.avatar ? (
        <img src={userData.avatar} className="w-full h-full" alt="User avatar" />
          ) : (
            <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
              <use href={sprite + "#icon-user-02"} />
            </svg>
          )}
        </div>
        <ul className="w-[295px] md:w-[380px] mb-5 md:mb-10 flex flex-col gap-[10px] md:gap-[14px]">
          <li className="flex gap-2 md:mb-[6px]">
            <div className="relative w-[161px] md:w-[226px]">
              <input
                className={clsx(
                  "w-full px-3 py-[13px] md:p-3 border border-border-black rounded-[30px] outline-none text-[12px] md:text-[14px] leading-[133%] md:leading-[129%] tracking-[-0.02em]",
                  userData.avatar && "border-orange-main",
                  errors.avatar && "border-error-color",
                )}
                type="text"
                // value={userData.avatar || "Avatar URL"}
                defaultValue={userData.avatar || ""}
                placeholder="Avatar URL"
                {...register("avatar")}
              />
              {errors.avatar && (
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
                "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
                userData.name && "border-orange-main",
                errors.name && "border-error-color",
              )}
              type="text"
            defaultValue={userData.name || "Name"}
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
                userData.email && "border-orange-main",
                errors.email && "border-error-color",
              )}
              type="email"
              defaultValue={userData.email}
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
                userData.phone && "border-orange-main",
                errors.phone && "border-error-color",
              )}
              type="phone"
              defaultValue={userData.phone}
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
        <Button className="w-full py-3 px-auto bg-orange-main rounded-[30px] text-white font-bold text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
          Send
        </Button>
      </form>
    </ModalWindow>
  );
};

export default ModalEditUser;
