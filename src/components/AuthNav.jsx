/* eslint-disable react/prop-types */
import Button from "./Button";
import sprite from "../assets/images/sprite.svg";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelectors";
import { logoutUser } from "../redux/auth/authOperations";

const AuthNav = ({ isHome, isHeader }) => {
  const { token } = useSelector(selectUser);
  const isLogin = Boolean(token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="font-bold text-[16px]">
      {isLogin ? (
        <div
          className={clsx(
            "flex flex-col-reverse md:flex-row gap-2 items-center justify-center",
            !isHome && "xl:ml-[142px]",
            !isHeader && "md:mt-[-60px] xl:mt-0"
          )}
        >
          <Button
            onClick={() => dispatch(logoutUser())}
            className={clsx(
              "w-full md:w-auto px-[35px] py-[15px] rounded-[30px] bg-orange-main hover:bg-[#f9b020] font-bold text-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
              isHome && isHeader && "hidden",
              !isHeader && "md:border md:border-border-white"
            )}
          >
            LOG OUT
          </Button>
          <div
            className={clsx(
              "flex gap-2 items-center",
              !isHeader && "md:hidden"
            )}
          >
            <div className="w-[32px] h-[32px] md:w-[50px] md:h-[50px] bg-[#fff4df] rounded-full flex justify-center items-center">
              <svg className="w-5 h-5 md:w-6 md:h-6">
                <use href={sprite + "#icon-user-02"} />
              </svg>
            </div>
            <p
              className={clsx(
                "font-bold text-[16px] md:text-[20px] leading-[100%]",
                isHome && "text-white"
              )}
            >
              Name
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center xl:ml-[142px]">
          <Button
            onClick={() => navigate("/login")}
            className={clsx(
              "w-full md:w-auto px-[35px] py-[15px] rounded-[30px] bg-orange-main hover:bg-[#f9b020] font-bold text-white text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
              isHome && " border border-solid border-border-white"
            )}
          >
            LOG IN
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="w-full md:w-auto px-5 py-[15px] rounded-[30px] bg-[#fff4df] hover:bg-[#fbe7c1] text-orange-main font-bold text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]"
          >
            REGISTRATION
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthNav;
