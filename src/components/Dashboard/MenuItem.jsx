const MenuItem = ({ children }) => {
  return (
    <li className=" h-[44px] md:pl-10 pl-6 flex items-center text-2xl hover:bg-brand3 rounded-md transition-all cursor-pointer">
      {children}
    </li>
  );
};

export default MenuItem;
