/* eslint-disable react/prop-types */
import ModalWindow from "../ModalWindow"
import registerPictures from "../../assets/images/registerPictures";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";


const ModalApproveAction = ({ open, onClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/");
    }
  return (
      <ModalWindow open={open} onClose={onClose}>
          <div className="px-[28px] pt-[38px] pb-10 md:p-[80px] flex flex-col items-center gap-5">
              <div className="w-[80px] h-[80px] bg-[#fff4df] rounded-full flex justify-center items-center">
                  <img
            srcSet={`${registerPictures.iconCat2x} 2x, ${registerPictures.iconCat} 1x`}
            src={registerPictures.iconCat}
            alt="Cat icon"
            className="w-[44px]"
          />
              </div>
              <p className="font-bold text-[20px] md:text-[24px] leading-[100%] md:leading-[117%] mb-2">Already leaving?</p>
              <div className="flex gap-2">
                  <Button onClick={handleLogout} className="rounded-[30px] bg-orange-main py-3 md:py-[14px] px-[57px] px-auto text-white font-bold text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]">Yes</Button>
                  <Button onClick={()=>onClose(false)} className="rounded-[30px] bg-black-main bg-opacity-5 py-3 md:py-[14px] px-[44px] font-bold text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-black-main">Cancel</Button>
              </div>
              
        </div>
    </ModalWindow>
  )
}

export default ModalApproveAction