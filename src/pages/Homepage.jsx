import homepagePictures from "../assets/images/homepagePictures";

const Homepage = () => {
  return (
    <>
      <section className="h-[333px] md:h-[457px] xl:h-[313px]">
        <div className="absolute top-[10px] md:top-4 left-5 md:left-8 -z-10 rounded-[30px] md:rounded-[60px] bg-orange-main w-[335px] md:w-[704px] xl:w-[1216px] px-5 mb:px-8 xl:px-16 pb-[50px] mb:pb-[44px] xl:pb-8 pt-[118px] md:pt-[178px] xl:flex xl:justify-between xl:gap-[101px] xl:items-end">
          <h1 className="mb-6 md:mb-8 xl:m-0 xl:w-[706px] font-bold text-[50px] md:text-[80px] leading-[96%] text-white">
            Take good <span className="font-bold opacity-[40%]">care</span> of
            your small pets
          </h1>
          <p className="md:w-[255px] md:ml-[385px] xl:ml-0 text-[14px] md:text-[18px] leading-[129%] md:leading-[122%] tracking-[-0.02em] text-white">
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </section>

      <section className="rounded-[30px] md:rounded-[60px] overflow-hidden">
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet={`${homepagePictures.desktopGirlAndDog2x} 2x, ${homepagePictures.desktopGirlAndDog} 1x`}
            sizes="1280px"
          />
          <source
            media="(min-width:768px)"
            srcSet={`${homepagePictures.tabletGirlAndDog2x} 2x, ${homepagePictures.tabletGirlAndDog} 1x`}
            sizes="768px"
          />
          <source
            media="(min-width:320px)"
            srcSet={`${homepagePictures.mobileGirlAndDog2x} 2x, ${homepagePictures.mobileGirlAndDog} 1x`}
            sizes="320px"
          />
          <img src={homepagePictures.mobileGirlAndDog} alt="The dog corgi" />
        </picture>
      </section>
    </>
  );
};

export default Homepage;
