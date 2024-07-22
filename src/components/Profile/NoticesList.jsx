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
    if(idForRemove) dispatch(removePet(idForRemove));
  },[dispatch, idForRemove])

  if (petsList.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-[14px]">
      {petsList.slice(0, 4).map(pet => (
        <li key={pet._id}>
          <PetCard data={pet} setIdForRemove={setIdForRemove} />
        </li>
      ))}
    </ul>
  )
}

export default PetsList