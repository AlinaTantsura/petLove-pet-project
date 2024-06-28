import sprite from "../../assets/images/sprite.svg";
import Button from "../Button";

const NoticesItem = () => {
  return (
    <div className="bg-white rounded-[16px] p-6 md:p-[14px] md:pb-[18px]">
      <div className="mb-6 md:mb-[14px] w-full h-[178px] md:h-[162px] rounded-[16px] bg-slate-200"></div>
      <div>
        <h3 className="mb-2 font-bold text-[16px] md:text-[18px] md:leading-[133%] text-[#2b2b2a] flex justify-between items-center">
          Lost Gecko
          <span className="font-normal text-[14px] leading-[129%] md:leading-[143%] flex gap-1 items-center">
            <svg className="w-4 h-4">
              <use href={sprite + "#icon-star"} />
            </svg>
            12
          </span>
        </h3>
        <ul className="mb-4 md:mb-[14px] flex flex-wrap gap-[14px] md:gap-[16px] text-[12px] leading-[117%] tracking-[-0.02em]">
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Name
            </span>
            Daisy
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Birthday
            </span>
            01.10.2022
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Sex
            </span>
            Female
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Species
            </span>
            Dog
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Category
            </span>
            Dog
          </li>
        </ul>
        <p className="mb-6 text-[14px] leading-[129%] tracking-[-0.02em] text-[#2b2b2a]">
          Friendly gecko lost around the park. Reward offered.
        </p>
        <div className="flex gap-[10px]">
          <Button className="px-[81px] md:px-[90px] xl:px-[79px] py-[13px] md:py-[12px] rounded-[30px] bg-orange-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-white">
            Learn more
          </Button>
          <Button className="rounded-full bg-[#fff4df] w-[44px] h-[44px] flex justify-center items-center">
            <svg className="w-[18px] h-[18px]">
              <use href={sprite + "#icon-trash-2"} />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoticesItem;
