import loaderPictures from "../assets/images/loaderPictures";
import sprite from "../assets/images/sprite.svg";

export const Loader = () => {
  return (
    <div className="relative min-w-[320px] max-w-[375px] md:min-w-[375px] md:max-w-[768px] xl:min-w-[768px] xl:max-w-[1280px] h-[812px] md:h-[1024px] xl:h-[800px] m-auto">
      <picture>
        <source
          media="(min-width:1280px)"
          srcSet={`${loaderPictures.desktopLoaderPict2x} 2x, ${loaderPictures.desktopLoaderPict} 1x`}
          sizes="1280px"
        />
        <source
          media="(min-width:768px)"
          srcSet={`${loaderPictures.tabletLoaderPict2x} 2x, ${loaderPictures.tabletLoaderPict} 1x`}
          sizes="768px"
        />
        <source
          media="(min-width:320px)"
          srcSet={`${loaderPictures.mobileLoaderPict2x} 2x, ${loaderPictures.mobileLoaderPict} 1x`}
          sizes="320px"
        />
        <img
          src={loaderPictures.mobileLoaderPict}
          alt="The doctor examines the dog's ear"
        />
      </picture>
      {/* <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full border-[2px] border-white border-opacity-30 w-[270px] md:w-[398px] h-[270px] md:h-[398px]'> */}
      <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-[50px] md:text-[100px] text-white leading-[100%] tracking-[-0.04em] flex justify-center items-end">
        petl
        <svg className="w-11 h-11 md:w-[82px] md:h-[82px] fill-orange-main">
          <use href={sprite + "#icon-heart-circle"} />
        </svg>
        ve
      </p>
      {/* </div> */}
    </div>
  );
};
