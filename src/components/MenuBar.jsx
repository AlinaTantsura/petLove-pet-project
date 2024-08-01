/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import sprite from "../assets/images/sprite.svg";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import clsx from "clsx";
const MenuBar = ({ onClose, open, openLogoutWindow }) => {
  const { pathname } = useLocation();
  const isMobileHome = pathname === "/" ? true : false;
  if (!open) return null;
  return (
    <div
      className={clsx(
        "xl:hidden absolute top-0 right-0 w-[218px] md:w-[374px] h-full pt-[28px] pb-10 px-5 md:py-10 md:px-8 z-10",
        isMobileHome ? "bg-white" : "bg-orange-main"
      )}
    >
      <button
        onClick={onClose}
        className="absolute right-5 md:right-8 w-8 h-8 md:w-9 md:h-9"
      >
        <svg
          className={clsx(
            "w-8 h-8 md:w-9 md:h-9",
            isMobileHome ? "stroke-black-main" : "stroke-white"
          )}
        >
          <use href={sprite + "#icon-x"} />
        </svg>
      </button>
      <Navigation isHome={!isMobileHome} isOpenMenu={open} onCloseMenu={onClose} />
      <AuthNav isHome={!isMobileHome} isOpenMenu={open} onCloseMenu={onClose} openLogoutWindow={openLogoutWindow} />
    </div>
  );
};

export default MenuBar;
