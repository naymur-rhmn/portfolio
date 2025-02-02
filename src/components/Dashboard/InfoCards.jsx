import InfoCard from "./InfoCard";

const InfoCards = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      <InfoCard title={"total projects"} count={5} />
      <InfoCard title={"total blogs"} count={10} />
      <InfoCard title={"total visitors"} count={10} />
    </div>
  );
};

export default InfoCards;
