import sprite from "../../assets/images/sprite.svg"

const PetCard = () => {
    const title = "Golden Retriever Puppies"
  return (
      <div className="relative md:w-[305px] xl:w-auto flex gap-[14px] xl:gap-[25px] items-center border border-[rgba(38, 38, 38, 0.1)] rounded-[20px] py-4 md:py-[22px] pr-3 pl-4 xl:p-5">
          <div className="w-[66px] md:w-[75px] xl:w-[90px] h-[66px] md:h-[75px] xl:h-[90px]  rounded-full bg-slate-400"></div>
          <div>
              <h3 className="mb-2 font-bold text-[14px] leading-[129%] text-[#2b2b2a]">{title.length > 20 ? `${title.slice(0,19)}...` : title}</h3>
              <ul className="flex flex-wrap gap-[10px] xl:gap-[27px] text-[12px] leading-[117%] tracking-[-0.02em]">
                  <li className="flex flex-col gap-1"><span className="text-[10px] leading-[140%] text-opacity-black">Name</span>Daisy</li>
                  <li className="flex flex-col gap-1"><span className="text-[10px] leading-[140%] text-opacity-black">Birthday</span>01.10.2022</li>
                  <li className="flex flex-col gap-1"><span className="text-[10px] leading-[140%] text-opacity-black">Sex</span>Female</li>
                  <li className="flex flex-col gap-1"><span className="text-[10px] leading-[140%] text-opacity-black">Species</span>Dog</li>
              </ul>
          </div>
          <button className="absolute right-[12px] xl:right-[20px] top-[12px] xl:top-5 rounded-full bg-[#fff4df] w-[30px] md:w-[32px] xl:w-[38px] h-[30px] md:h-[32px] xl:h-[38px] flex justify-center items-center">
              <svg className="w-[16px] md:w-[18px] h-[16px] md:h-[18px]">
                  <use href={sprite + "#icon-trash-2"} />
              </svg>
          </button>
    </div>
  )
}

export default PetCard