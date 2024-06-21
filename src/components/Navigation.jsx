import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex gap-[10px]">
      <Link
        to="/news"
        className="px-5 py-[15px] border border-solid border-[solid 1px rgba(38, 38, 38, 0.15)] rounded-[30px] cursor-pointer text-[16px] leading-[125%] tracking-[-0.03em]"
      >
        News
      </Link>
      <Link
        to="/notices"
        className="px-5 py-[15px] border border-solid border-[rgba(38, 38, 38, 0.15)] rounded-[30px] cursor-pointer text-[16px] leading-[125%] tracking-[-0.03em]"
      >
        Find pet
      </Link>
      <Link
        to="/friends"
        className="px-5 py-[15px] border border-solid border-[rgba(38, 38, 38, 0.15)] rounded-[30px] cursor-pointer text-[16px] leading-[125%] tracking-[-0.03em]"
      >
        Our friends
      </Link>
    </div>
  );
};

export default Navigation;
