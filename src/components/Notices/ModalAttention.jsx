/* eslint-disable react/prop-types */
import ModalWindow from "../ModalWindow";
import loginPictures from "../../assets/images/loginPictures";
import { Link } from "react-router-dom";

const ModalAttention = ({ onClose, open }) => {
  return (
    <ModalWindow onClose={onClose} open={open}>
      <div className="w-[335px] md:w-[466px] px-5 py-10 md:p-[60px] flex flex-col items-center">
        <div className="w-[80px] h-[80px] mb-5 flex justify-center items-center rounded-full bg-[#fff4df]">
          <img
            srcSet={`${loginPictures.dogIcon2x} 2x, ${loginPictures.dogIcon} 1x`}
            src={loginPictures.dogIcon}
            alt="Dog icon"
            className="w-[44px]"
          />
        </div>
        <h2 className="mb-5 font-bold text-orange-main text-[20px] md:text-[24px] leading-[100%] md:leading-[117%]">
          Attention
        </h2>
        <p className="mb-6 md:mb-[28px] text-[14px] leading-[129%] tracking-[-0.02em] text-[#2b2b2a] text-center">
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className="flex gap-2">
          <Link
            className="rounded-[30px] py-3 md:py-[14px] px-[48px] bg-orange-main font-bold text-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]"
            to="/login"
          >
            Log In
          </Link>
          <Link
            className="rounded-[30px] py-3 md:py-[14px] px-[24px] bg-[#fff4df] font-bold text-orange-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]"
            to="/register"
          >
            Registration
          </Link>
        </div>
      </div>
    </ModalWindow>
  );
};

export default ModalAttention;
