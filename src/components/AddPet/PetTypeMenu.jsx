
import clsx from "clsx";

/* eslint-disable react/prop-types */
const PetTypeMenu = ({ open, types, onClose, setType }) => {
  
    const handleClick = (type) => {
        setType(type);
        onClose()
    }
  if (!open) return null;
  return (
    <div className="absolute top-[50px] md:top-[58px] w-[143px] md:w-[210px] h-[78px] md:h-[126px] bg-white rounded-[15px] border border-border-black p-3 md:p-[14px] pr-[6px] md:pr-[7px]">
      <ul
        className={clsx(
          "w-full h-full overflow-scroll flex flex-col gap-2",
          "types-menu"
        )}
      >
        {types && types.map((type) => (
          <li onClick={() => handleClick(type[0].toUpperCase() + type.slice(1))} className="cursor-pointer hover:font-bold text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] text-black-main text-opacity-60" key={type}>{type[0].toUpperCase() + type.slice(1)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetTypeMenu;
