import { Suspense } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectIsLoading } from "../redux/selectors";
import { LoadingPage } from "./LoadingPage";
import { selectIsLoading } from "../redux/auth/authSelectors";

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="relative min-w-[320px] max-w-[375px] md:min-w-[375px] md:max-w-[768px] xl:min-w-[768px] xl:max-w-[1280px] m-auto p-5 md:p-8 text-[#262626]">
      <Header />
      {isLoading ? <LoadingPage /> : (
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
      )}
    </div>
  );
};

export default Layout;
