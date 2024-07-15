/* eslint-disable react/prop-types */
import ModalWindow from "../ModalWindow";
import sprite from "../../assets/images/sprite.svg"
import Button from "../Button";

const ModalNotice = ({ onClose, open, data, isFavorite, setAddId, setDeleteId }) => {
    const handleFavorites = () => {
        if (isFavorite) setDeleteId(data._id)
        else setAddId(data._id)
    }
    const arrayStars = [1, 2, 3, 4, 5].slice(0, data.popularity)
    const arrayGreyStars = [1, 2, 3, 4, 5].slice(data.popularity)
  return (
      <ModalWindow onClose={onClose} open={open}>
          <div className="w-[335px] md:w-[473px] px-5 py-10 flex flex-col items-center ">
              <div className="mb-5 md:mb-4 relative w-[120px] md:w-[150px] h-[120px] md:h-[150px]">
                  <img className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] rounded-full" src={data.imgURL} alt={data.title} />
                  <span className="absolute top-0 left-1 z-10000 bg-[#fff4df] rounded-[30px] py-2 px-[14px] text-[14px] leading-[129%] tracking-[-0.02em] text-orange-main">{data.category[0].toUpperCase() + data.category.slice(1)}</span>
              </div>
              <h2 className="mb-[10px] font-bold text-[16px] md:text-[18px] md:leading-[133%] text-[#2b2b2a]">{data.title}</h2>
              <ul className="mb-6 md:mb-5 flex gap-1 items-center justify-center">
                  {arrayStars.map(() => {
                    return (<li className="w-4 h-4" key={crypto.randomUUID()}>
                          <svg className="w-4 h-4 fill-[#ffc531] stroke-[#ffc531]" >
                              <use href={sprite + "#icon-star"} />
                          </svg>
                      </li>)
                  })}
                  {arrayGreyStars.length > 0 && arrayGreyStars.map(() => {
                      return (<li className="w-4 h-4" key={crypto.randomUUID()}>
                          <svg className="w-4 h-4 fill-black-main opacity-5 stroke-black-main" >
                              <use href={sprite + "#icon-star"} />
                          </svg>
                      </li>)
                  })
                      
                  }
                  <span className="text-[14px] leading-[143%] text-[#2b2b2a]">{data.popularity}</span>
              </ul>
              <ul className="mb-[18px] flex gap-[27px]">
                  <li className="text-[12px] leading-[117%] tracking-[-0.02em] flex flex-col justify-center items-center gap-1">
                      <span className="text-[10px] leading-[140%] opacity-50">
                          Name
                      </span>
                      {data.name}
                  </li>
                  <li className="text-[12px] leading-[117%] tracking-[-0.02em] flex flex-col justify-center items-center gap-1">
                      <span className="text-[10px] leading-[140%] opacity-50">
                          Birthday
                      </span>
                      {data.birthday?.split("-").reverse().join(".") || "Unknown"}
                  </li>
                  <li className="text-[12px] leading-[117%] tracking-[-0.02em] flex flex-col justify-center items-center gap-1">
                      <span className="text-[10px] leading-[140%] opacity-50">
                          Sex
                      </span>
                      {data.sex[0].toUpperCase() + data.sex.slice(1)}
                  </li>
                  <li className="text-[12px] leading-[117%] tracking-[-0.02em] flex flex-col justify-center items-center gap-1">
                      <span className="text-[10px] leading-[140%] opacity-50">
                          Species
                      </span>
                      {data.species[0].toUpperCase() + data.species.slice(1)}
                  </li>
              </ul>
              <p className="mb-10 text-[14px] leading-[129%] tracking-[-0.02em] text-[#2b2b2a] text-center">
                 {data.comment} 
              </p>
              <div className="flex gap-[10px]">
                  <Button onClick={handleFavorites} className="bg-orange-main w-[135px] md:w-[160px] rounded-[30px] py-3 md:py-[14px] flex gap-2 items-center justify-center text-white text-[16px]">{!isFavorite ? "Add to" : "Remove from"}
                      <svg className="w-[18px] h-[18px] stroke-white fill-none">
                          <use href={sprite + "#icon-heart-white"} />
                      </svg>
                  </Button>
                  <Button className="bg-[#fff4df] rounded-[30px] px-[37px] md:px-[50px] py-3 md:py-[14px] text-orange-main text-[16px]">Contact</Button>
              </div>
          </div>
    </ModalWindow>
  )
}

export default ModalNotice