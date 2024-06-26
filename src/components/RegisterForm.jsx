import { Link } from "react-router-dom";
import Button from "./Button";
import sprite from "../assets/images/sprite.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useState } from "react";
import Title from "./Title";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/authOperations";

const registerSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    ),
  password: yup.string().required().min(7),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});


const RegisterForm = () => {
  const [isShownPass, setIsShownPass] = useState(false);
  const [isShownConfirmPass, setIsShownConfirmPass] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    if(password !== confirmPassword) return
    dispatch(registerUser({name: data.name, email: data.email, password: data.password}))
    reset();
  };

  return (
    <form
      className="min-w-full h-[422px] md:min-w-full md:h-[560px] xl:min-w-[592px] xl:max-w-[592px] xl:h-[654px] px-2 flex justify-center items-center bg-white rounded-[30px] md:rounded-[60px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-[295px] md:w-[424px]">
      <Title>Registration</Title>          
        <p className="mb-[20px] md:mb-8 text-[14px] md:text-[18px] leading-[122%] tracking-[-0.02em]">
          Thank you for your interest in our platform.
        </p>
        <div className="relative">
          <input
            className={clsx(
              "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
              errors.name && "border-error-color"
            )}
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && (
            <>
              <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[12px] md:right-[19px] ">
                <use href={sprite + "#icon-cross-small"} />
              </svg>
              <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                {errors.name.message}
              </span>
            </>
          )}
        </div>
        <div className="relative mt-[10px]">
          <input
            className={clsx(
              "w-full p-3 md:p-4 border border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
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
        </div>
        <div className="relative mt-[10px] md:mt-4">
          <input
            className={clsx(
              "w-full p-3 md:p-4 border border-border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
              errors.password && "border-error-color",
              password.length > 6 && "border-[#08aa83]"
            )}
            type={isShownPass ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              onChange: (e) => setPassword(e.target.value),
            })}
          />
          <button
            onClick={() => setIsShownPass(!isShownPass)}
            className="absolute top-[12px] md:top-[15px] right-[12px] md:right-[16px]"
          >
            <svg className={clsx("w-[18px] h-[18px] md:w-[22px] md:h-[22px]")}>
              <use
                href={
                  isShownPass ? sprite + "#icon-eye" : sprite + "#icon-eye-off"
                }
              />
            </svg>
          </button>
          {errors.password && (
            <>
              <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[38px] md:right-[50px] ">
                <use href={sprite + "#icon-cross-small"} />
              </svg>
              <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                {errors.password.message}
              </span>
            </>
          )}
          {password.length > 6 && (
            <>
              <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[38px] md:right-[50px] ">
                <use href={sprite + "#icon-check"} />
              </svg>
              <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-[#08aa83]">
                Password is secure
              </span>
            </>
          )}
        </div>
        <div className="relative mt-[10px] md:mt-4">
          <input
            className={clsx(
              "w-full p-3 md:p-4 border border-border-border-black rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
              errors.confirmPassword || confirmPassword !== password
                ? "border-error-color"
                : confirmPassword === password &&
                confirmPassword !== "" &&
                    "border-[#08aa83]"
            )}
            type={isShownConfirmPass ? "text" : "password"}
            placeholder="Confirm password"
            {...register("confirmPassword", {
              onChange: (e) => setConfirmPassword(e.target.value),
            })}
          />
          <button
            className="absolute top-[12px] md:top-[15px] right-[12px] md:right-[16px]"
            onClick={() => setIsShownConfirmPass(!isShownConfirmPass)}
          >
            <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]">
              <use
                href={
                  isShownConfirmPass
                    ? sprite + "#icon-eye"
                    : sprite + "#icon-eye-off"
                }
              />
            </svg>
          </button>
          {errors.confirmPassword && (
              <>
                <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[38px] md:right-[50px] ">
                  <use href={sprite + "#icon-cross-small"} />
                </svg>
                <span className="ml-4 text-[10px] md:text-[12px] leading-[120%] md:leading-[117%] text-error-color">
                  {errors.confirmPassword?.message}
                </span>
              </>
            )}
          {!errors.confirmPassword &&
            confirmPassword === password && confirmPassword !== "" &&
             (
              <>
                <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-[12px] md:top-[15px] right-[38px] md:right-[50px] ">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </>
            )}
        </div>
        <Button className="mt-[24px] md:mt-[32px] xl:mt-[64px] mb-3 md:mb-4 w-full py-3 md:py-4 rounded-[30px] bg-orange-main hover:bg-[#f9b020] font-bold text-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
          REGISTRATION
        </Button>
        <p className="leading-[117%] md:leading-[143%] text-opacity-black text-[12px] md:text-[14px] text-center">
          Already have an account?
          <Link to="/register" className="ml-1 text-orange-main underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
