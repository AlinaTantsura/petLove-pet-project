import { useEffect, useState } from "react";
import NoticesItem from "./NoticesItem";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/auth/authOperations";
import { selectFavorites } from "../../redux/auth/authSelectors";
import { removeFavoriteNotice } from "../../redux/notices/noticesOperations";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

/* eslint-disable react/no-unescaped-entities */
const MyNotices = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [idToRemove, setIdToRemove] = useState(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (idToRemove) {
      dispatch(removeFavoriteNotice(idToRemove));
      setIdToRemove(null);
    }
    dispatch(getCurrentUser());
  }, [dispatch, idToRemove]);
  // console.log(location)
  return (
    <section className="xl:w-[664px] xl:pt-10">
      <div className="flex gap-[10px]">
        <Link
          to="/profile"
          className={clsx(
            "w-[123px] md:w-[142px] h-[42px] md:h-[48px] rounded-[30px] flex justify-center items-center text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] ",
            pathname === "/profile"
              ? "bg-orange-main text-white"
              : "bg-white text-black-main"
          )}
        >
          My favorite pets
        </Link>
        <Link
          to="/profile/viewed"
          className={clsx(
            "w-[123px] md:w-[142px] h-[42px] md:h-[48px] rounded-[30px] flex justify-center items-center text-[14px] md:text-[16px] leading-[129%] md:leading-[125%]",
            pathname === "/profile/viewed"
              ? "bg-orange-main text-white"
              : "bg-white text-black-main"
          )}
        >
          Viewed
        </Link>
      </div>
      {favorites.length === 0 ? (
        <p className="mx-auto mt-[80px] md:mt-[180px] mb-[120px] md:mb-[150px] md:w-[458px] text-center text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] tracking-[-0.02em]">
          Oops,{" "}
          <span className="font-bold text-orange-main">
            looks like there aren't any furries
          </span>{" "}
          on our adorable page yet. Do not worry! View your pets on the "find
          your favorite pet" page and add them to your favorites.
        </p>
      ) : (
        <ul className="mt-5 md:mt-[18px] flex flex-col md:flex-row md:flex-wrap gap-5 xl:gap-6">
          {favorites.map((pet) => (
            <li key={pet._id} className="md:w-[342px] xl:w-[320px]">
              <NoticesItem
                data={pet}
                setIdToRemove={setIdToRemove}
                isViewed={pathname === "/profile/viewed"}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MyNotices;
