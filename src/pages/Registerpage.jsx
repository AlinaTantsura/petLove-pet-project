import RegisterForm from "../components/RegisterForm"
// import {
//   desktopCat,
//   desktopCat2x,
//   tabletCat,
//   tabletCat2x,
//   mobileCat,
//   mobileCat2x
// } from "../assets/images/registerPictures"
import registerPictures from "../assets/images/registerPictures"

const Registerpage = () => {
  return (
    <div className="flex gap-8">
          <div className="w-[592px]">
              <picture>
             <source media="(min-width:1280px)" srcSet={`${registerPictures.desktopCat2x} 2x, ${registerPictures.desktopCat} 1x`} sizes="1280px"/>
                 <source media="(min-width:768px)" srcSet={`${registerPictures.tabletCat2x} 2x, ${registerPictures.tabletCat} 1x`} sizes="768px"/>
                <source media="(min-width:320px)" srcSet={`${registerPictures.mobileCat2x} 2x, ${registerPictures.mobileCat} 1x`} sizes="320px"/>
                <img src={registerPictures.mobileCat} alt="The red cat" />
            </picture>
          </div>
        <RegisterForm />
      </div>
  )
}

export default Registerpage