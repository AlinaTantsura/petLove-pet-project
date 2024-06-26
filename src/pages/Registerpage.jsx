import RegisterForm from "../components/RegisterForm";
import registerPictures from "../assets/images/registerPictures";
import PetBlock from "../components/PetBlock";

const Registerpage = () => {
  return (
    <div className="flex gap-[10px] md:gap-4 xl:gap-8 flex-col xl:flex-row">
      <PetBlock>
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet={`${registerPictures.desktopCat2x} 2x, ${registerPictures.desktopCat} 1x`}
            sizes="1280px"
          />
          <source
            media="(min-width:768px)"
            srcSet={`${registerPictures.tabletCat2x} 2x, ${registerPictures.tabletCat} 1x`}
            sizes="768px"
          />
          <source
            media="(min-width:320px)"
            srcSet={`${registerPictures.mobileCat2x} 2x, ${registerPictures.mobileCat} 1x`}
            sizes="320px"
          />
          <img src={registerPictures.mobileCat} alt="The red cat" />
        </picture>
        <div className="absolute hidden md:left-8 xl:left-[60px] md:bottom-8 xl:bottom-24 w-[294px] rounded-[20px] bg-white px-4 py-[18px] md:flex gap-2">
          <div className="min-w-[60px] h-[60px] rounded-full bg-[#fff4df] flex justify-center items-center">
            <img
              srcSet={`${registerPictures.iconCat2x} 2x, ${registerPictures.iconCat} 1x`}
              src={registerPictures.iconCat}
              alt="Cat icon"
              className="w-8"
            />
          </div>
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="font-bold text-[16px] leading-[125%] text-orange-main">
                Jack
              </h3>
              <p className="text-[12px] leading-[117%] tracking-[-0.02em]">
                <span className="text-opacity-black">Birthday: </span>
                18.10.2021
              </p>
            </div>
            <p className="text-[12px] leading-[117%] tracking-[-0.02em] text-[rgba(38, 38, 38)] opacity-[80%]">
              Jack is a gray Persian cat with green eyes. He loves to be
              pampered and groomed, and enjoys playing with toys.
            </p>
          </div>
        </div>
      </PetBlock>
      <RegisterForm />
    </div>
  );
};

export default Registerpage;
