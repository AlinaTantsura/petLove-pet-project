import MyNotices from "../components/MyNotices";
import UserCard from "../components/Profile/UserCard";

const Profilepage = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-8 xl:flex-row">
      <UserCard />
      {/* <MyNotices /> */}
    </div>
  );
};

export default Profilepage;
