import { Suspense } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-w-[320px] max-w-[375px] md:min-w-[375px] md:max-w-[768px] xl:min-w-[768px] xl:max-w-[1280px] m-auto p-8 text-[#262626]">
      {/* <LoadingPage /> */}
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
