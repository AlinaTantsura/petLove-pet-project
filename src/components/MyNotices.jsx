import NoticesItem from "./Profile/NoticesItem";

/* eslint-disable react/no-unescaped-entities */
const MyNotices = () => {
  return (
    <section className="xl:w-[664px] xl:pt-10">
      <div className="flex gap-[10px]">
        <div className="w-[123px] md:w-[142px] h-[42px] md:h-[48px] bg-orange-main rounded-[30px] flex justify-center items-center text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-white">
          My favorite pets
        </div>
        <div className="w-[123px] md:w-[142px] h-[42px] md:h-[48px] bg-white rounded-[30px] flex justify-center items-center text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">
          Viewed
        </div>
      </div>
      {/* <p className="mx-auto mt-[80px] md:mt-[180px] mb-[120px] md:mb-[150px] md:w-[458px] text-center text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] tracking-[-0.02em]">Oops, <span className="font-bold text-orange-main">looks like there aren't any furries</span> on our adorable page yet. Do not worry! View your pets on the "find your favorite pet" page and add them to  your favorites.</p> */}
      <ul className="mt-5 md:mt-[18px] flex flex-col md:flex-row md:flex-wrap gap-5 xl:gap-6">
      <li className="md:w-[342px] xl:w-[320px]"><NoticesItem /></li>
      <li className="md:w-[342px] xl:w-[320px]"><NoticesItem /></li>
      <li className="md:w-[342px] xl:w-[320px]"><NoticesItem /></li>
      <li className="md:w-[342px] xl:w-[320px]"><NoticesItem /></li>
      </ul>
    </section>
  );
};

export default MyNotices;
