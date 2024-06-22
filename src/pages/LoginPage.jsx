import LoginForm from "../components/LoginForm";
import loginPictures from "../assets/images/loginPictures";

const LoginPage = () => {
  return (
    <div className="flex gap-[10px] md:gap-4 xl:gap-8 flex-col xl:flex-row">
      <div className="relative min-w-full xl:min-w-[592px] xl:max-w-[592px]">
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet={`${loginPictures.desktopDog2x} 2x, ${loginPictures.desktopDog} 1x`}
            sizes="1280px"
          />
          <source
            media="(min-width:768px)"
            srcSet={`${loginPictures.tabletDog2x} 2x, ${loginPictures.tabletDog} 1x`}
            sizes="768px"
          />
          <source
            media="(min-width:320px)"
            srcSet={`${loginPictures.mobileDog2x} 2x, ${loginPictures.mobileDog} 1x`}
            sizes="320px"
          />
          <img src={loginPictures.mobileDog} alt="The dog corgi" />
        </picture>
        <div className="absolute hidden md:left-8 xl:left-[60px] md:bottom-8 xl:bottom-24 w-[294px] rounded-[20px] bg-white px-4 py-[18px] md:flex gap-2">
          <div className="min-w-[60px] h-[60px] rounded-full bg-[#fff4df] flex justify-center items-center">
            <img
              srcSet={`${loginPictures.dogIcon2x} 2x, ${loginPictures.dogIcon} 1x`}
              src={loginPictures.dogIcon}
              alt="Dog icon"
              className="w-8"
            />
          </div>
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="font-bold text-[16px] leading-[125%] text-orange-main">
                Rich
              </h3>
              <p className="text-[12px] leading-[117%] tracking-[-0.02em]">
                <span className="text-opacity-black">Birthday: </span>21.09.2020
              </p>
            </div>
            <p className="text-[12px] leading-[117%] tracking-[-0.02em] text-[rgba(38, 38, 38)] opacity-[80%]">
              Rich would be the perfect addition to an active family that loves
              to play and go on walks. I bet he would love having a doggy
              playmate too!
            </p>
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
