import EditUserBtn from "./EditUserBtn";
import LogOutBtn from "./LogOutBtn";
import PetsBlock from "./PetsBlock";
import UserBlock from "./UserBlock";

const UserCard = () => {
  return (
    <section className=" relative bg-white rounded-[30px] md:rounded-[60px] p-5 pb-10 md:p-10">
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn />
    </section>
  );
};

export default UserCard;
