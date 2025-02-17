const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-brand3 py-2 px-4 rounded-md hover:bg-opacity-90 mt-1 font-semibold text-base transition-all"
    >
      {children}
    </button>
  );
};

export default Button;
