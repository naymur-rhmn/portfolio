const InfoCard = ({ title, count }) => {
  return (
    <div className="bg-dbBg2 text-white h-[100px] rounded-lg flex md:flex-row flex-col justify-between items-center py-3 px-5 text-center">
      <p className="uppercase text-sm font-medium">{title}</p>
      <p className="text-brand3 font-bold">{count ? count : 0}</p>
    </div>
  );
};

export default InfoCard;
