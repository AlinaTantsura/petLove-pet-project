import { useEffect } from "react";
import EditUserBtn from "./EditUserBtn";
import LogOutBtn from "./LogOutBtn";
import PetsBlock from "./PetsBlock";
import UserBlock from "./UserBlock";
import { useDispatch } from "react-redux";
import { getAllUserInfo } from "../../redux/auth/authOperations";

const UserCard = () => {
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getAllUserInfo())
  }, [dispatch]);

  return (
    <section className="relative xl:w-[520px] bg-white rounded-[30px] md:rounded-[60px] p-5 pb-10 md:p-10">
      <EditUserBtn/>
      <UserBlock />
      <PetsBlock />
      <LogOutBtn />
    </section>
  );
};

export default UserCard;
