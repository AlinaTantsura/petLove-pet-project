import { useEffect, useState } from "react";
import EditUserBtn from "./EditUserBtn";
import LogOutBtn from "./LogOutBtn";
import PetsBlock from "./PetsBlock";
import UserBlock from "./UserBlock";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserInfo } from "../../redux/auth/authOperations";
import { selectUser} from "../../redux/auth/authSelectors";
import ModalEditUser from "./ModalEditUser";

const UserCard = () => {
  const data = useSelector(selectUser);
  
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    if(!data.email) dispatch(getAllUserInfo());
  }, [dispatch, data]);

  
  return (
    <section className="relative xl:w-[520px] bg-white rounded-[30px] md:rounded-[60px] p-5 pb-10 md:p-10">
      <EditUserBtn setOpenModal={() => setOpenModal(true)}/>
      <UserBlock data={data} setOpenModal={() => setOpenModal(true)} />
      <PetsBlock />
      <LogOutBtn />
      <ModalEditUser
        open={openModal}
        onClose={() => setOpenModal(false)}
        userData={data}
      />
    </section>
  );
};

export default UserCard;
