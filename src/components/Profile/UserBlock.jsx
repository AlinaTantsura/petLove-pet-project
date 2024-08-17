/* eslint-disable react/prop-types */
import clsx from "clsx";
import sprite from "../../assets/images/sprite.svg";

const UserBlock = ({data, setOpenModal}) => {
  return (
    <div className="">
      <div className="w-[80px] rounded-[30px] bg-orange-main px-[14px] py-[10px] flex gap-1 items-center text-[14px] leading-[129%] tracking-[-0.02em] text-white">
        User
        <svg className="w-[18px] h-[18px]">
          <use href={sprite + "#icon-user"} />
        </svg>
      </div>
      {data.avatar ? (
        <div className="mb-2 m-auto w-[94px] h-[94px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden">
        <img src={data.avatar} className="w-full h-full object-cover" alt="User avatar" />
        </div>
      ) : (
        <div className="text-center mb-[28px] md:mb-5">
          <div className="mb-2 m-auto w-[94px] h-[94px] md:w-[110px] md:h-[110px] rounded-full bg-[#fff4df] flex justify-center items-center">
            <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
              <use href={sprite + "#icon-user-02"} />
            </svg>
          </div>
          <span onClick={setOpenModal} className="text-[12px] md:text-[14px] leading-[133%] md:leading-[129%] tracking-[-0.02em] underline text-black-main cursor-pointer">
            Upload photo
          </span>
        </div>
      )}
      <div>
        <h3 className="mb-5 font-bold text-[16px] md:text-[18px] md:leading-[133%] text-[#2b2b2a]">
          My information
        </h3>
        <ul className="w-full mb-10 flex flex-wrap xl:flex-col gap-[10px] md:gap-[14px] text-[14px] leading-[129%] md:text-[16px] md:leading-[125%]">
          <li className={clsx("w-full md:max-w-[305px] xl:w-full p-3 md:p-4 border rounded-[30px]",
            data.name ? "border-orange-main" : "border-border-black"
          )}>
            {data.name ? data.name : "Name"}
          </li>
          <li className={clsx("w-full md:max-w-[305px] xl:w-full p-3 md:p-4 border rounded-[30px]",
            data.email ? "border-orange-main" : "border-border-black"
          )}>
            {data.email ? data.email : "Email"}
          </li>
          <li className={clsx("w-full md:max-w-[305px] xl:w-full p-3 md:p-4 border rounded-[30px]",
            data.phone ? "border-orange-main" : "border-border-black"
          )}>
            {data.phone ? data.phone : "+380"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserBlock;
