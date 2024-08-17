/* eslint-disable react/prop-types */
import sprite from "../../assets/images/sprite.svg"

const PetCard = ({ data, setIdForRemove }) => {
   
  return (
      <div className="relative w-full flex gap-[14px] xl:gap-[25px] items-center border border-[rgba(38, 38, 38, 0.1)] rounded-[20px] py-4 md:py-[22px] px-4 xl:p-5">
          <div className="w-[66px] md:w-[75px] xl:w-[90px] h-[66px] md:h-[75px] xl:h-[90px] rounded-full bg-white overflow-hidden">
              <img src={data.imgURL} alt={data.title} className="w-full h-full object-cover" />
          </div>
          <div className="pr-5">
              <h3 className="mb-2 font-bold text-[14px] leading-[129%] text-[#2b2b2a]">{data.title.length > 20 ? `${data.title.slice(0,19)}...` : data.title}</h3>
              <ul className="flex flex-wrap gap-[10px] xl:gap-[27px] text-[12px] leading-[117%] tracking-[-0.02em]">
                  <li className="flex flex-col gap-1"><span className="text-[10px] leading-[140%] text-opacity-black">Name</span>{data.name}</li>
                  <li className="flex flex-col gap-1"><span className="text-[10px] leading-[140%] text-opacity-black">Birthday</span>{data.birthday?.split("-").reverse().join(".") || "Unknown"}</li>
                  <li className="flex flex-col gap-1"><span className="text-[10px] leading-[140%] text-opacity-black">Sex</span>{data.sex[0].toUpperCase() + data.sex.slice(1)}</li>
                  <li className="flex flex-col gap-1"><span className="text-[10px] leading-[140%] text-opacity-black">Species</span>{data.species[0].toUpperCase() + data.species.slice(1)}</li>
              </ul>
          </div>
          <button onClick={() => setIdForRemove(data._id)} className="absolute right-[12px] xl:right-[20px] top-[12px] xl:top-5 rounded-full bg-[#fff4df] w-[30px] md:w-[32px] xl:w-[38px] h-[30px] md:h-[32px] xl:h-[38px] flex justify-center items-center">
              <svg className="w-[16px] md:w-[18px] h-[16px] md:h-[18px]">
                  <use href={sprite + "#icon-trash-2"} />
              </svg>
          </button>
    </div>
  )
}

export default PetCard