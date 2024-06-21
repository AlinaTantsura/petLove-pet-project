import { useState } from "react";
import Button from "./Button";
import sprite from "../assets/images/sprite.svg"
import { useNavigate } from "react-router-dom";

const AuthNav = () => {
  const [isLogin] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 items-center font-bold text-[16px] leading-[125%] tracking-[-0.03em]">
      {isLogin ? (<>
        <Button
          className="px-[35px] py-[15px] rounded-[30px] bg-[#F6B83D] hover:bg-[#f9b020] text-white"
        >
          LOG OUT
        </Button>
        <div className="flex gap-2 items-center"> 
          <div className="w-[50px] h-[50px] bg-[#fff4df] rounded-full flex justify-center items-center">
          <svg className="w-6 h-6">
            <use href={sprite + "#icon-user-02"} />
            </svg>

          </div>
          <p className="font-bold text-[20px] leading-[100%] tracking-[-0.03em]">Name</p>
        </div>
        </>
      ) : (
        <>
            <Button
              onClick={()=> navigate("/login")}
            className="px-[35px] py-[15px] rounded-[30px] bg-[#F6B83D] hover:bg-[#f9b020] text-white"
            >
              LOG IN
            </Button>
            <Button
              onClick={()=> navigate("/register")}
            className="px-5 py-[15px] rounded-[30px] bg-[#fff4df] hover:bg-[#fbe7c1] text-[#f6b83d]"
            >
            REGISTRATION
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthNav;
