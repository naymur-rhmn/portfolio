import { NavLink } from "react-router";

const Topbar = () => {
  return (
    <div className="h-[60px] w-full bg-transparent flex justify-end items-center text-2xl text-brand1 font-Lancelot">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-brand3 rounded-md transition-all " : ""
        }
      >
        Portfolio
      </NavLink>
      {/* <p className="cursor-pointer">Portfolio</p> */}
    </div>
  );
};

export default Topbar;
