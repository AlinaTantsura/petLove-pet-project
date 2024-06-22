import sprite from "../assets/images/sprite.svg";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="py-5 md:py-8 xl:px-8 flex items-center max-w-[1280px] justify-between">
      <p className="text-neutral-800 font-bold text-[20px] md:text-[28px] leading-[100%] tracking-[-0.04em] flex items-end">
        petl
        <svg className="w-[17px] h-[17px] md:w-[23px] md:h-[23px]">
          <use href={sprite + "#icon-heart-circle"} />
        </svg>
        ve
      </p>
      <div className="flex gap-[142px]">
        <div className="hidden xl:block">
          <Navigation />
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden md:block">
            <AuthNav />
          </div>
          <svg className="w-[32px] md:w-[36px] h-[32px] md:h-[36px] xl:hidden">
            <use href={sprite + "#icon-menu-01"} />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
