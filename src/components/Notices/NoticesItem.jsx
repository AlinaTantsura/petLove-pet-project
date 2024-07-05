/* eslint-disable react/prop-types */
import sprite from "../../assets/images/sprite.svg";
import Button from "../Button";

const NoticesItem = ({ data }) => {
  return (
    <div className="bg-white rounded-[16px] p-6">
      <div className="mb-6 w-full h-[178px] rounded-[16px] bg-white overflow-hidden">
       <img src={data.imgURL} alt={data.title} className="translate-y-[-20%]" />
      </div>
      <div>
        <h3 className="mb-2 font-bold text-[16px] md:text-[18px] md:leading-[133%] text-[#2b2b2a] flex justify-between items-center">
          {data.title}
          <span className="font-normal text-[14px] leading-[129%] md:leading-[143%] flex gap-1 items-center">
            <svg className="w-4 h-4">
              <use href={sprite + "#icon-star"} />
            </svg>
            {data.popularity}
          </span>
        </h3>
        <ul className="mb-4 flex flex-wrap gap-[14px] md:gap-[16px] xl:gap-5 text-[12px] leading-[117%] tracking-[-0.02em]">
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Name
            </span>
            {data.name}
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Birthday
            </span>
            {data.birthday}
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Sex
            </span>
            {data.sex}
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
            {data.species}
          </li>
        </ul>
        <p className="h-[60px] md:h-[78px] text-[14px] leading-[129%] tracking-[-0.02em] text-[#2b2b2a]">
          {data.comment}
        </p>
        <div className="flex gap-[10px]">
          {/* <Button className="px-[81px] md:px-[90px] xl:px-[79px] py-[13px] md:py-[12px] rounded-[30px] bg-orange-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-white"> */}
          <Button className="w-full py-[14px] rounded-[30px] bg-orange-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-white">
            Learn more
          </Button>
          <Button className="rounded-full bg-[#fff4df] min-w-[46px] h-[46px] md:min-w-[48px] md:h-[48px] flex justify-center items-center">
            <svg className="w-[18px] h-[18px] ">
              <use href={sprite + "#icon-heart"} />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoticesItem;
