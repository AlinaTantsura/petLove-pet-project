import { Link, useLocation } from "react-router-dom";
import sprite from "../assets/images/sprite.svg";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import { useState } from "react";
import MenuBar from "./MenuBar";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelectors";
import ModalApproveAction from "./Profile/ModalApproveAction";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const location = useLocation();
  const { token } = useSelector(selectUser);
  const isLogin = Boolean(token);
  const isHome = location.pathname === "/" ? true : false;

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  return (
    <>
      <header
        className={clsx(
          "flex items-center max-w-[1280px] justify-between",
          isHome
            ? "pt-2 pb-5 px-5 md:py-0 md:px-8 xl:px-16"
            : "py-5 md:py-8 xl:px-8"
        )}
      >
        <Link
          to="/"
          onClick={()=>setIsOpenMenu(false)}
          className={clsx(
            "font-bold text-[20px] md:text-[28px] leading-[100%] tracking-[-0.04em] flex items-end",
            isHome ? "text-white" : "text-black-main"
          )}
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
        <div className={clsx("flex",
          isHome && isLogin && "xl:w-[65%] xl:justify-between"
        )}>
          <div className="hidden xl:block">
            <Navigation isHome={isHome} onCloseMenu={setIsOpenMenu} />
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden md:block">
              <AuthNav isHome={isHome} isHeader="true" isOpenMenu={isOpenMenu} openLogoutWindow={() => setOpenLogoutModal(true)}/>
            </div>
            <button
              className="w-[32px] md:w-[36px] h-[32px] md:h-[36px] xl:hidden"
              onClick={handleOpenMenu}
            >
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
      {isOpenMenu && <MenuBar onClose={() => setIsOpenMenu(false)} open={isOpenMenu} openLogoutWindow={() => setOpenLogoutModal(true)}/>}
      <ModalApproveAction open={openLogoutModal} onClose={() => setOpenLogoutModal(false)}/>
    </>
  );
};

export default Header;
