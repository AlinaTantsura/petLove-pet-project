import { useDispatch, useSelector } from "react-redux";
import FriendsItem from "./FriendsItem";
import { getOurFriends } from "../redux/ourFriends/ourFriendsOpertions";
import { useEffect } from "react";
import { selectFriends } from "../redux/auth/authSelectors";

const FriendsList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);

  useEffect(() => {
    if (friends.length === 0) {
      dispatch(getOurFriends());
    }
  }, [dispatch, friends]);

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
