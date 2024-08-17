/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import PetCard from "./PetCard"
import { useEffect, useState } from "react";
import { removePet } from "../../redux/auth/authOperations";
import { selectPets } from "../../redux/auth/authSelectors";

const PetsList = () => {
  const petsList = useSelector(selectPets);
  const dispatch = useDispatch();
  const [idForRemove, setIdForRemove] = useState(null);

  useEffect(() => {
    if (idForRemove) {
      dispatch(removePet(idForRemove));
      setIdForRemove(null)
    }
  },[dispatch, idForRemove])
  if (petsList.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-[14px]">
      {petsList.map(pet => (
        <li className="w-full md:w-[305px] xl:w-full" key={pet._id}>
          <PetCard data={pet} setIdForRemove={setIdForRemove} />
        </li>
      ))}
    </ul>
  )
}

export default PetsList