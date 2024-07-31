/* eslint-disable react/prop-types */
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ isHome, onCloseMenu }) => {
  const { pathname } = useLocation();
  return (
    <div className="w-[119px] md:w-[120px] xl:w-auto mx-auto mt-[208px] md:mt-[369px] xl:mt-0 mb-[280px] md:mb-[395px] xl:mb-0 flex flex-col xl:flex-row gap-[10px]">
      <Link
        to="/news"
        onClick={()=>onCloseMenu(false)}
        className={clsx("w-full xl:w-auto px-0 xl:px-5 py-[15px] border border-solid rounded-[30px] cursor-pointer flex justify-center text-[14px] md:text-[16px] xl:text-[20px] leading-[129%] md:leading-[125%]",
          isHome
            ? pathname === "/news" ? "border-white text-white" : "border-border-white text-white"
            : pathname === "/news" ? "border-orange-main" : "border-border-black",
        )
        }
      >
        News
      </Link>
      <Link
        to="/notices"
        onClick={()=>onCloseMenu(false)}
        className={clsx("w-full xl:w-auto px-0 xl:px-5 py-[15px] border border-solid rounded-[30px] cursor-pointer flex justify-center text-[14px] md:text-[16px] xl:text-[20px] leading-[129%] md:leading-[125%]",
          isHome
            ? pathname === "/notices" ? "border-white text-white" : "border-border-white text-white"
            : pathname === "/notices" ? "border-orange-main" : "border-border-black",
          
        )
        }
      >
        Find pet
      </Link>
      <Link
        to="/friends"
        onClick={()=>onCloseMenu(false)}
        className={clsx("w-full xl:w-auto px-0 xl:px-5 py-[15px] border border-solid rounded-[30px] cursor-pointer flex justify-center text-[14px] md:text-[16px] xl:text-[20px] leading-[129%] md:leading-[125%]",
          isHome
            ? pathname === "/friends" ? "border-white text-white" : "border-border-white text-white"
            : pathname === "/friends" ? "border-orange-main" : "border-border-black",
        )
        }
      >
        Our friends
      </Link>
    </div>
  );
};

export default Navigation;
