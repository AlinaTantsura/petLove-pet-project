/* eslint-disable react/prop-types */
import clsx from "clsx";
import sprite from "../../assets/images/sprite.svg";
import Button from "../Button";
import ModalNotice from "../Notices/ModalNotice";
import { useState } from "react";

const NoticesItem = ({ data, setIdToRemove, isViewed }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-[16px] p-6 md:p-[14px] md:pb-[18px]">
      <div className="mb-6 md:mb-[14px] w-full h-[178px] md:h-[162px] rounded-[16px] bg-white overflow-hidden">
        <img
          src={data.imgURL}
          alt={data.title}
          className="translate-y-[-20%]"
        />
      </div>
      <div>
        <h3 className="mb-2 font-bold text-[16px] md:text-[18px] md:leading-[133%] text-[#2b2b2a] flex justify-between items-center">
          {data.title}
          <span className="font-normal text-[14px] leading-[129%] md:leading-[143%] flex gap-1 items-center">
            <svg className="w-4 h-4 fill-orange-main stroke-orange-main">
              <use href={sprite + "#icon-star"} />
            </svg>
            {data.popularity}
          </span>
        </h3>
        <ul className="mb-4 md:mb-[14px] flex flex-wrap gap-[14px] md:gap-[16px] text-[12px] leading-[117%] tracking-[-0.02em]">
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Name
            </span>
            {data.name.length > 7 ? data.name.slice(0, 7) + "..." : data.name}
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Birthday
            </span>
            {data.birthday?.split("-").reverse().join(".") || "Unknown"}
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Sex
            </span>
            {data.sex[0].toUpperCase() + data.sex.slice(1)}
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Species
            </span>
            {data.species[0].toUpperCase() + data.species.slice(1)}
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[10px] leading-[140%] text-opacity-black">
              Category
            </span>
            {data.category[0].toUpperCase() + data.category.slice(1)}
          </li>
        </ul>
        <p className="mb-6 text-[14px] leading-[129%] tracking-[-0.02em] text-[#2b2b2a]">
          {data.comment}
        </p>
        <div className="flex gap-[10px]">
          <Button
            onClick={() => setOpen(true)}
            className="w-full py-[13px] md:py-[12px] rounded-[30px] bg-orange-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-white"
          >
            Learn more
          </Button>
          <Button
            onClick={() => setIdToRemove(data._id)}
            className={clsx(
              "rounded-full bg-[#fff4df] min-w-[44px] h-[44px] flex justify-center items-center",
              isViewed && "hidden"
            )}
          >
            <svg className="w-[18px] h-[18px]">
              <use href={sprite + "#icon-trash-2"} />
            </svg>
          </Button>
        </div>
      </div>
      <ModalNotice
        onClose={() => setOpen(false)}
        open={open}
        data={data}
        setDeleteId={setIdToRemove}
        isFavorite={true}
      />
    </div>
  );
};

export default NoticesItem;
