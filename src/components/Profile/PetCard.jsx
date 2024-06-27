import sprite from "../../assets/images/sprite.svg"

const PetCard = () => {
    const title = "Golden Retriever Puppies"
  return (
      <div className="flex gap-[14px] border border-[rgba(38, 38, 38, 0.1)] rounded-[20px] py-4 pr-3 pl-5">
          <div className="w-[66px] h-[66px] rounded-full bg-slate-400"></div>
          <div>
              <h3 className="mb-2 font-bold text-[14px] leading-[129%] text-[#2b2b2a]">{title.length > 20 ? `${title.slice(0,19)}...` : title}</h3>
              <ul className="flex flex-wrap gap-[10px]">
                  <li className="flex flex-col gap-1 text-[12px] leading-[117%] tracking-[-0.02em]"><span className="text-[10px] leading-[140%] tracking-[-0.02em] text-opacity-black">Name</span>Daisy</li>
                  <li className="flex flex-col gap-1 text-[12px] leading-[117%] tracking-[-0.02em]"><span className="text-[10px] leading-[140%] tracking-[-0.02em] text-opacity-black">Birthday</span>01.10.2022</li>
                  <li className="flex flex-col gap-1 text-[12px] leading-[117%] tracking-[-0.02em]"><span className="text-[10px] leading-[140%] tracking-[-0.02em] text-opacity-black">Sex</span>Female</li>
                  <li className="flex flex-col gap-1 text-[12px] leading-[117%] tracking-[-0.02em]"><span className="text-[10px] leading-[140%] tracking-[-0.02em] text-opacity-black">Species</span>Dog</li>
              </ul>
          </div>
          <button className="mt-[-4px] rounded-full bg-[#fff4df] w-[30px] h-[30px] p-[7px]">
              <svg className="w-[16px] h-[16px]">
                  <use href={sprite + "#icon-trash-2"} />
              </svg>
          </button>
    </div>
  )
}

export default PetCard