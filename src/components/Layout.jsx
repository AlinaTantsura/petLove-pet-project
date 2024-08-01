import { Suspense, useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/auth/authSelectors";
import { Loader } from "./Loader";
import { Store } from "react-notifications-component";

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const requestError = useSelector(selectError);
  console.log(requestError)
  useEffect(() => {
    if (requestError) {
      Store.addNotification({
        title: "Error!",
        message: requestError,
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
  }, [requestError])
  
  return (
    <div className="relative min-w-[320px] max-w-[375px] md:min-w-[375px] md:max-w-[768px] xl:min-w-[768px] xl:max-w-[1280px] m-auto p-5 md:p-8 text-[#262626]">
      
      {isLoading ? (
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
