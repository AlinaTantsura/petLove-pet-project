import { useState } from "react";
import Button from "../Button"
import ModalApproveAction from "./ModalApproveAction"

const LogOutBtn = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button onClick={()=>setIsOpenModal(true)} className="mt-5 px-[28px] py-[12px] rounded-[30px] bg-[#fff4df] font-bold text-[14px] leading-[129%] text-orange-main">
          LOG OUT
    </Button>
      <ModalApproveAction open={isOpenModal} onClose={() => setIsOpenModal(false)} />
      </>
  )
}

export default LogOutBtn