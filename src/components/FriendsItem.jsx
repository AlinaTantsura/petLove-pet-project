/* eslint-disable react/prop-types */
const FriendsItem = ({ data }) => {
  const workDay = data.workDays?.find(day => day.isOpen);
  const cutString = (str, num) => {
    if (!str) return null;
    return str.length < num ? str : str.slice(0, num) + "...";
  };
  return (
    <div className="relative rounded-[15px] bg-white py-10 px-5 flex gap-[14px] md:gap-4">
      <div className="absolute top-3 right-3 rounded-[30px] bg-[#fff4df] p-2 text-orange-main text-[12px] md:text-[14px] leading-[133%] md:leading-[129%] tracking-[-0.02em]">
        {workDay ? `${workDay.from}-${workDay.to}` : "No info"}
      </div>
      <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-slate-200">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div>
        <h2 className="mb-[14px] md:mb-[20px] font-bold text-[16px] md:text-[20px] md:leading-[130%]  tracking-[-0.04em]">
          {data.title}
        </h2>
        <ul>
          <li className="text-[14px] leading-[129%] tracking-[-0.02em]">
            <span className="text-opacity-black">Email:</span>
            {data.email ? (
              <a className="hover:underline cursor-pointer">
                {" "}
                {cutString(data.email, 22)}
              </a>
            ) : (
              " No info"
            )}
          </li>
          <li className="text-[14px] leading-[129%] tracking-[-0.02em]">
            <span className="text-opacity-black">Address:</span>
            {data.address ? (
              <a href={data.addressUrl} target="_blank" className="hover:underline cursor-pointer">
                {" "}
                {cutString(data.address, 18)}
              </a>
            ) : (
              " No info"
            )}
          </li>
          <li className="text-[14px] leading-[129%] tracking-[-0.02em]">
            <span className="text-opacity-black">Phone:</span>
            {data.phone ? (
              <a className="hover:underline cursor-pointer">
                {" "}
                {data.phone}
              </a>
            ) : (
              " No info"
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FriendsItem;
