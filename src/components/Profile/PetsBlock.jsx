import NoticesList from "./NoticesList"
import AddPet from "./AddPet"
// import { useSelector } from "react-redux";
// import { selectPets } from "../../redux/auth/authSelectors";

const PetsBlock = () => {
  // const petsList = useSelector(selectPets);
  return (
    <div>
          <AddPet />
          <NoticesList />
    </div>
  )
}

export default PetsBlock