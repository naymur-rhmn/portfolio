const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className=" px-4 text-center block">
      <h2 className="relative capitalize text-white pb-1 text-3xl lg:text-4xl font-semibold tracking-wide inline-block before:absolute lg:before:top-12 before:top-10 before:left-[50%] before:-translate-x-[50%] before:bg-brand1 before:content-[''] before:h-1 before:w-20 before:rounded-md">
        {title}
      </h2>
      <p className="text-balance mt-3 text-gray-200 tracking-wide">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
