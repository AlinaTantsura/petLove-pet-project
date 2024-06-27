import sprite from "../../assets/images/sprite.svg";

const UserBlock = () => {
    const avatar = false;
  return (
    <div className="">
      <div className="absolute rounded-[30px] bg-orange-main px-[14px] py-[10px] flex gap-1 items-center text-[14px] leading-[129%] tracking-[-0.02em] text-white">
        User
        <svg className="w-[18px] h-[18px]">
          <use href={sprite + "#icon-user"} />
        </svg>
          </div>
              {avatar ? (<p>Avatar</p>)
                  : (
                      <div className="text-center mb-[28px] md:mb-5">
                      <div className="mb-2 m-auto w-[94px] h-[94px] md:w-[110px] md:h-[110px] rounded-full bg-[#fff4df] flex justify-center items-center">
                          <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
                              <use href={sprite + "#icon-user-02"} />
                          </svg>
                      </div>
                      <a className="text-[12px] md:text-[14px] leading-[133%] md:leading-[129%] tracking-[-0.02em] underline text-black-main">Upload photo</a>
                      </div>
              )}
          <div>
              <h3 className="mb-5 font-bold text-[16px] md:text-[18px] md:leading-[133%] text-[#2b2b2a]">My information</h3>
              <ul className="w-full mb-10 flex flex-wrap xl:flex-col gap-[10px] md:gap-[14px] text-[14px] leading-[129%] md:text-[16px] md:leading-[125%]">
                  <li className="w-full md:max-w-[305px] xl:w-full p-3 md:p-4 border border-orange-main rounded-[30px]">Name</li>
                  <li className="w-full md:max-w-[305px] xl:w-full p-3 md:p-4 border border-orange-main rounded-[30px]">Name@gmail.com</li>
                  <li className="w-full md:max-w-[305px] xl:w-full p-3 md:p-4 border border-border-black rounded-[30px]">+380</li>
              </ul>
          </div>
    </div>
  );
};

export default UserBlock;
