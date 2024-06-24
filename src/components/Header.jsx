import { Link, useLocation } from "react-router-dom";
import sprite from "../assets/images/sprite.svg";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import { useState } from "react";
import MenuBar from "./MenuBar";
import clsx from "clsx";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" ? true : false;

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }
  return (
    <>
      <header
        className={clsx("flex items-center max-w-[1280px] justify-between xl:justify-start",
          isHome
            ? "pt-2 pb-5 px-5 md:py-0 md:px-8 xl:px-16"
            : "py-5 md:py-8 xl:px-8"
        )
          
        }
      >
        <Link
          to="/"
          className={clsx("font-bold text-[20px] md:text-[28px] leading-[100%] tracking-[-0.04em] flex items-end",
            isHome
              ? "text-white xl:mr-[280px]"
              : "text-black-main"
          )
          }
        >
          petl
          <svg
            className={
              isHome
                ? "w-[17px] h-[17px] md:w-[23px] md:h-[23px] fill-white"
                : "w-[17px] h-[17px] md:w-[23px] md:h-[23px] fill-orange-main"
            }
          >
            <use href={sprite + "#icon-heart-circle"} />
          </svg>
          ve
        </Link>
        <div className="flex xl:w-full">
          <div className="hidden xl:block">
            <Navigation isHome={isHome} />
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden md:block">
              <AuthNav isHome={isHome} isHeader='true'/>
            </div>
            <button className="w-[32px] md:w-[36px] h-[32px] md:h-[36px] xl:hidden" onClick={handleOpenMenu}>
              <svg
                className={
                  isHome
                    ? "w-[32px] md:w-[36px] h-[32px] md:h-[36px] stroke-white"
                    : "w-[32px] md:w-[36px] h-[32px] md:h-[36px] stroke-black-main"
                }
              >
                <use href={sprite + "#icon-menu-01"} />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {isOpenMenu && <MenuBar onClose={() => setIsOpenMenu(false)} />}
    </>
  );
};

export default Header;
