/* eslint-disable react/prop-types */
import Button from "../Button";
import sprite from "../../assets/images/sprite.svg";
import ModalEditUser from "./ModalEditUser";
import { useState } from "react";

const EditUserBtn = ({data}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="absolute right-5 md:right-10 w-[38px] h-[38px] rounded-full bg-[#fff4df] flex justify-center items-center">
        <svg className="w-[18px] h-[18px]">
          <use href={sprite + "#icon-edit-2"} />
        </svg>
      </Button>
      <ModalEditUser open={openModal} onClose={() => setOpenModal(false)} userData={data} />
    </>
  );
};

export default EditUserBtn;
