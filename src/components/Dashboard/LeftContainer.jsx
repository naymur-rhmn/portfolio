import { NavLink } from "react-router";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const LeftContainer = () => {
  return (
    <div className="min-h-[100vh] bg-dbBg2 min-w-[180px] max-w-[350px] w-[25vw] sticky top-0">
      <Logo />
      <ul className="flex flex-col gap-1 font-Lancelot">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "bg-brand3 rounded-md transition-all " : ""
          }
        >
          <MenuItem>Dahsboard</MenuItem>
        </NavLink>
        <NavLink
          to="/dashboard/addproject"
          className={({ isActive }) =>
            isActive ? "bg-brand3 rounded-md transition-all " : ""
          }
        >
          <MenuItem>Add Project</MenuItem>
        </NavLink>
        <NavLink
          to="/dashboard/addblog"
          className={({ isActive }) =>
            isActive ? "bg-brand3 rounded-md transition-all " : ""
          }
        >
          <MenuItem>Abb Blog</MenuItem>
        </NavLink>
        <NavLink
          to="/dashboard/updateskills"
          className={({ isActive }) =>
            isActive ? "bg-brand3 rounded-md transition-all " : ""
          }
        >
          <MenuItem>Update Skills</MenuItem>
        </NavLink>
        <NavLink
          to="/dashboard/content"
          className={({ isActive }) =>
            isActive ? "bg-brand3 rounded-md transition-all " : ""
          }
        >
          <MenuItem>Contents</MenuItem>
        </NavLink>
        <NavLink
          to="/dashboard/resume"
          className={({ isActive }) =>
            isActive ? "bg-brand3 rounded-md transition-all " : ""
          }
        >
          <MenuItem>Resume</MenuItem>
        </NavLink>
      </ul>
    </div>
  );
};

export default LeftContainer;
