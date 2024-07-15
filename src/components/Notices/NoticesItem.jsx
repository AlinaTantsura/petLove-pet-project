/* eslint-disable react/prop-types */
import { useState } from "react";
import sprite from "../../assets/images/sprite.svg";
import Button from "../Button";
import ModalAttention from "./ModalAttention";
import ModalNotice from "./ModalNotice";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";

const NoticesItem = ({ data, isFavorite, setAddId, setDeleteId }) => {
  const [open, setOpen] = useState(false);
  const { token } = useSelector(selectUser);
  const isLogin = Boolean(token);

  const handleFavorites = (id) => {
    if (!isLogin) return setOpen(true)
    setAddId(id)
  }
  return (
    <>
      <div className="relative h-[430px] md:h-[444px] bg-white rounded-[16px] p-6">
        <div className="mb-6 w-full h-[178px] rounded-[16px] bg-white overflow-hidden">
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
              <svg className="w-4 h-4 fill-[#ffc531] stroke-[#ffc531]">
                <use href={sprite + "#icon-star"} />
              </svg>
              {data.popularity}
            </span>
          </h3>
          <ul className="mb-4 flex gap-[14px] md:gap-[16px] xl:gap-5 text-[12px] leading-[117%] tracking-[-0.02em]">
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
          {/* <p className="h-[60px] md:h-[78px] text-[14px] leading-[129%] tracking-[-0.02em] text-[#2b2b2a]"> */}
          <p className="text-[14px] leading-[129%] tracking-[-0.02em] text-[#2b2b2a]">
            {data.comment}
          </p>
          <div className="absolute bottom-6 w-[calc(100%-48px)] flex gap-[10px]">
            <Button
              onClick={() => setOpen(true)}
              className="w-full py-[14px] rounded-[30px] bg-orange-main text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-white"
            >
              Learn more
            </Button>
            {!isFavorite ? (
              <Button
                onClick={() => {handleFavorites(data._id)}}
                className="rounded-full bg-[#fff4df] min-w-[46px] h-[46px] md:min-w-[48px] md:h-[48px] flex justify-center items-center"
              >
                <svg className="w-[18px] h-[18px] ">
                  <use href={sprite + "#icon-heart"} />
                </svg>
              </Button>
            ) : (
              <Button
                onClick={() => setDeleteId(data._id)}
                className="rounded-full bg-[#fff4df] min-w-[46px] h-[46px] md:min-w-[48px] md:h-[48px] flex justify-center items-center"
              >
                <svg className="w-[18px] h-[18px] ">
                  <use href={sprite + "#icon-trash-2"} />
                </svg>
              </Button>
            )}
          </div>
        </div>
      </div>
      {isLogin ? (
        <ModalNotice onClose={() => setOpen(false)} open={open} data={data} setAddId={setAddId} setDeleteId={setDeleteId} isFavorite={isFavorite} />
      ) : (
        <ModalAttention onClose={() => setOpen(false)} open={open} />
      )}
    </>
  );
};

export default NoticesItem;
