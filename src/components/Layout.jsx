import { Suspense, useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/auth/authSelectors";
import { Loader } from "./Loader";
import { Store } from "react-notifications-component";
import { selectErrorNews } from "../redux/news/newsSelectors";
import { selectOurFriendsError, selectOurFriendsIsLoading } from "../redux/ourFriends/ourFriendsSelectors";

const Layout = () => {
  // const isLoading = useSelector(selectIsLoading);
  const isLoading = useSelector(selectOurFriendsIsLoading);
  const requestError = useSelector(selectError);
  const newsError = useSelector(selectErrorNews);
  const friendsError = useSelector(selectOurFriendsError);
  // console.log(requestError)

  useEffect(() => {
    if (requestError || newsError || friendsError) {
      Store.addNotification({
        title: "Error!",
        message: requestError || newsError || friendsError,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  }, [requestError, newsError, friendsError])
  
  return (
    <div className="relative min-w-[320px] max-w-[375px] md:min-w-[375px] md:max-w-[768px] xl:min-w-[768px] xl:max-w-[1280px] m-auto p-5 md:p-8 text-[#262626]">
      
      {(isLoading) ? (
        <Loader />
      ) : (
          <Suspense>
            <Header />
          <main>
            <Outlet />
          </main>
        </Suspense>
      )}
    </div>
  );
};

export default Layout;
