import { useDispatch, useSelector } from "react-redux";
import FriendsList from "../components/FriendsList"
import Title from "../components/Title"
import { getOurFriends } from "../redux/ourFriends/ourFriendsOpertions";
import { useEffect } from "react";
import { selectOurFriends} from "../redux/ourFriends/ourFriendsSelectors";

const FriendsPage = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectOurFriends);

  useEffect(() => {
    if (friends.length === 0) {
      dispatch(getOurFriends());
    }
  }, [dispatch, friends]);

  return (
    <div className="xl:px-8 ">
      <Title>Our friends</Title>
      <FriendsList />
    </div>
  )
}

export default FriendsPage