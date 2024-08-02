import { useSelector } from "react-redux";
import FriendsItem from "./FriendsItem";
import { selectOurFriends } from "../redux/ourFriends/ourFriendsSelectors";

const FriendsList = () => {
  const friends = useSelector(selectOurFriends);
  return (
    <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-y-[28px]">
      {friends.length > 0 &&
        friends.map((friend) => (
          <li key={friend._id}>
            <FriendsItem data={friend} />
          </li>
        ))}
    </ul>
  );
};

export default FriendsList;
