import { Suspense, useEffect } from "react";
import Header from "./Header";
import { Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectError } from "../redux/auth/authSelectors";
import { Loader } from "./Loader";
import { Store } from "react-notifications-component";
import { selectErrorNews} from "../redux/news/newsSelectors";
import { selectOurFriendsError, selectOurFriendsIsLoading } from "../redux/ourFriends/ourFriendsSelectors";
import { selectErrorNotices } from "../redux/notices/noticesSelectors";

const Layout = () => {
  const isLoadingFriends = useSelector(selectOurFriendsIsLoading);
  const requestError = useSelector(selectError);
  const newsError = useSelector(selectErrorNews);
  const noticesError = useSelector(selectErrorNotices);
  const friendsError = useSelector(selectOurFriendsError);

  useEffect(() => {
    if (requestError || newsError || friendsError || noticesError) {
      Store.addNotification({
        title: "Error!",
        message: requestError || newsError || friendsError || noticesError,
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
  }, [requestError, newsError, friendsError, noticesError])
  
  return (
    <div className="relative min-w-[320px] max-w-[375px] md:min-w-[375px] md:max-w-[768px] xl:min-w-[768px] xl:max-w-[1280px] m-auto p-5 md:p-8 text-[#262626]">
      
      {(isLoadingFriends) ? (
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
