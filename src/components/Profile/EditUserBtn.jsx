/* eslint-disable react/prop-types */
import Button from "../Button";
import sprite from "../../assets/images/sprite.svg";

const EditUserBtn = ({setOpenModal}) => {
  return (
    <>
      <Button
        onClick={setOpenModal}
        className="absolute right-5 md:right-10 w-[38px] h-[38px] rounded-full bg-[#fff4df] flex justify-center items-center">
        <svg className="w-[18px] h-[18px]">
          <use href={sprite + "#icon-edit-2"} />
        </svg>
      </Button>
    </>
  );
};

export default EditUserBtn;
