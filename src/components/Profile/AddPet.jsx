import sprite from "../../assets/images/sprite.svg"
import { Link } from "react-router-dom"

const AddPet = () => {
  return (
      <div className="mb-5 flex justify-between items-center">
          <h3 className="font-bold text-[16px] md:text-[18px] md:leading-[133%] text-[#2b2b2a]">My pets</h3>
          <Link to="/add-pet" className="px-4 md:px-5 py-[10px] rounded-[30px] bg-orange-main flex gap-1 text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-white">
              Add pet
              <svg className="w-[18px] h-[18px]">
                  <use href={sprite + "#icon-plus"} />
              </svg>
          </Link>
    </div>
  )
}

export default AddPet