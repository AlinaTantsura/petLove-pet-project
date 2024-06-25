import { Link } from "react-router-dom"
import errorPictures from "../assets/images/errorPictures"

const Errorpage = () => {
  return (
    <div className="w-full h-[712px] md:h-[878px] xl:h-[654px] bg-orange-main rounded-[30px] md:rounded-[60px] flex flex-col justify-center items-center">
          <h1 className="mb-5 md:mb-10 font-extrabold text-white text-[120px] md:text-[300px] leading-[100%] flex items-center">4
              <div className="w-[109px] h-[109px] md:w-[280px] md:h-[280px] rounded-full bg-white bg-opacity-10 overflow-hidden">
                  <img src={errorPictures.errorCat} srcSet={`${errorPictures.errorCat2x} 2x, ${errorPictures.errorCat} 1x`}
                      className="object-cover"
                      alt="The red cat" />
              </div>
              4</h1>
          <p className="mb-5 font-bold text-[16px] md:text-[24px] md:leading-[117%] text-white">Ooops! This page not found :(</p>
          <Link className="rounded-[30px] bg-[#fff4df] hover:bg-[#fbe7c1] py-3 md:py-[14px] px-[30px] font-bold text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-orange-main" to="/">To home page</Link>
    </div>
  )
}

export default Errorpage