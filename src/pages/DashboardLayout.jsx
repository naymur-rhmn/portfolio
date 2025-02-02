import LeftContainer from "../components/Dashboard/LeftContainer";
import MainContainer from "../components/Dashboard/MainContainer";

const DashboardLayout = () => {
  return (
    <section className="bg-dbBg1 min-h-[100vh] flex relative">
      <LeftContainer />
      <MainContainer />
    </section>
  );
};

export default DashboardLayout;
