import LoginForm from "../components/LoginForm"
// import {
//     desktopDog,
//   desktopDog2x,
//   tabletDog,
//   tabletDog2x,
//   mobileDog,
//   mobileDog2x} from "../assets/images/loginPictures"
import loginPictures from "../assets/images/loginPictures"

const LoginPage = () => {
  return (
      <div className="flex gap-8">
          <div className="w-[592px]">
              <picture>
             <source media="(min-width:1280px)" srcSet={`${loginPictures.desktopDog2x} 2x, ${loginPictures.desktopDog} 1x`} sizes="1280px"/>
                 <source media="(min-width:768px)" srcSet={`${loginPictures.tabletDog2x} 2x, ${loginPictures.tabletDog} 1x`} sizes="768px"/>
                <source media="(min-width:320px)" srcSet={`${loginPictures.mobileDog2x} 2x, ${loginPictures.mobileDog} 1x`} sizes="320px"/>
                <img src={loginPictures.mobileDog} alt="The dog corgi" />
            </picture>
          </div>
        <LoginForm  />
      </div>
  )
}

export default LoginPage