import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Layout = () => {
  return (
    <div className="flex flex-col w-full h-screen ">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="flex-grow mt-[2.7rem] py-2 md:mt-[3.2rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
