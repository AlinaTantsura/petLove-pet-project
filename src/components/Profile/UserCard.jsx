import { useEffect } from "react";
import EditUserBtn from "./EditUserBtn";
import LogOutBtn from "./LogOutBtn";
import PetsBlock from "./PetsBlock";
import UserBlock from "./UserBlock";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserInfo } from "../../redux/auth/authOperations";
import { selectUser } from "../../redux/auth/authSelectors";

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => { 
    dispatch(getAllUserInfo())
  }, [dispatch]);

  console.log(user)
  return (
    <section className="relative xl:w-[520px] bg-white rounded-[30px] md:rounded-[60px] p-5 pb-10 md:p-10">
      <EditUserBtn data={user} />
      <UserBlock data={user} />
      <PetsBlock />
      <LogOutBtn />
    </section>
  );
};

export default UserCard;
