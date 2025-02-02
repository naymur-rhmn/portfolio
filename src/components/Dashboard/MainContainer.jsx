import { Outlet } from "react-router";
import InfoCards from "./InfoCards";
import Topbar from "./Topbar";

const MainContainer = () => {
  return (
    <div className="md:pr-10 pr-6 pl-4 h-full w-full">
      <Topbar />
      <InfoCards />
      <Outlet />
    </div>
  );
};

export default MainContainer;
