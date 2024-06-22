import { Link } from "react-router-dom";
import Button from "./Button";
import sprite from "../assets/images/sprite.svg";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form
      className="min-w-full h-[422px] md:min-w-full md:h-[560px] xl:min-w-[592px] xl:max-w-[592px] xl:h-[654px] px-2 flex justify-center items-center bg-white rounded-[30px] md:rounded-[60px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-[295px] md:w-[424px]">
        <h2 className="mb-3 md:mb-4 font-bold text-[28px] md:text-[54px] leading-[100%] tracking-[-0.04em]">
          Registration
        </h2>
        <p className="mb-[20px] md:mb-8 text-[14px] md:text-[18px] leading-[122%] tracking-[-0.02em]">
          Thank you for your interest in our platform.
        </p>
        <input
          className="w-full p-3 md:p-4 border border-[rgba(38, 38, 38, 0.15)] rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]"
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="w-full mt-[10px] p-3 md:p-4 border border-[rgba(38, 38, 38, 0.15)] rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <div className="relative mt-[10px] md:mt-4">
          <input
            className="w-full p-3 md:p-4 border border-[rgba(38, 38, 38, 0.15)] rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-1/2 right-[12px] md:right-[16px] translate-y-[-50%]">
            <use href={sprite + "#icon-eye-off"} />
          </svg>
        </div>
        <div className="relative mt-[10px] md:mt-4">
          <input
            className="w-full p-3 md:p-4 border border-[rgba(38, 38, 38, 0.15)] rounded-[30px] outline-none text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]"
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
          <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] absolute top-1/2 right-[12px] md:right-[16px] translate-y-[-50%]">
            <use href={sprite + "#icon-eye-off"} />
          </svg>
        </div>
        <Button className="mt-[24px] md:mt-[32px] xl:mt-[64px] mb-3 md:mb-4 w-full py-3 md:py-4 rounded-[30px] bg-orange-main hover:bg-[#f9b020] font-bold text-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
          REGISTRATION
        </Button>
        <p className="leading-[117%] md:leading-[143%] text-opacity-black text-[12px] md:text-[14px] text-center">
          Already have an account?
          <Link
            to="/register"
            className="ml-1 text-orange-main underline"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
