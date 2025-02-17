import AllProjects from "./MyProjects/AllProjects";
import AllBlogs from "./MyBlogs/AllBlogs";
import SkillList from "./Skills/SkillList";

const Dashboard = () => {
  return (
    <>
      <SkillList />
      <AllProjects />
      <AllBlogs />
    </>
  );
};

export default Dashboard;
