import AllBlogs from "./AllBlogs";
import AllProjects from "./AllProjects";
import SkillList from "./SkillList";

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
