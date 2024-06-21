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
      className="w-[592px] h-[654px] flex justify-center items-center bg-white rounded-[60px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h2 className="mb-3 font-bold text-[54px] leading-[100%] tracking-[-0.04em]">
          Registration
        </h2>
        <p className="mb-8 text-[18px] leading-[122%] tracking-[-0.02em]">
          Thank you for your interest in our platform.
        </p>
        <input
          className="w-full p-4 border border-[rgba(38, 38, 38, 0.15)] rounded-[30px] outline-none"
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="w-full mt-4 p-4 border border-[rgba(38, 38, 38, 0.15)] rounded-[30px] outline-none"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <div className="relative mt-4">
          <input
            className="w-full p-4 border border-[rgba(38, 38, 38, 0.15)] rounded-[30px] outline-none"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <svg className="w-[22px] h-[22px] absolute top-1/2 right-[16px] translate-y-[-50%]">
            <use href={sprite + "#icon-eye-off"} />
          </svg>
        </div>
        <div className="relative mt-4">
          <input
            className="w-full p-4 border border-[rgba(38, 38, 38, 0.15)] rounded-[30px] outline-none"
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
          <svg className="w-[22px] h-[22px] absolute top-1/2 right-[16px] translate-y-[-50%]">
            <use href={sprite + "#icon-eye-off"} />
          </svg>
        </div>
        <Button className="mt-[32px] mb-4 w-full py-4 rounded-[30px] bg-[#F6B83D] hover:bg-[#f9b020] font-bold text-white">
          REGISTRATION
        </Button>
        <p className="leading-[143%] text-opacity-black text-[14px] text-center">
          Already have an account?
          <Link
            to="/register"
            className="m-1 text-[#f6b83d] underline text-[14px]"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
