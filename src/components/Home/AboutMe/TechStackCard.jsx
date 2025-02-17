const TechStackCard = ({ children }) => {
  return (
    <div className="md:p-6 p-4 rounded-lg bg-bg1 bg-opacity-80 drop-shadow-2xl shadow">
      {children}
    </div>
  );
};

export default TechStackCard;
