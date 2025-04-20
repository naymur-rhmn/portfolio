import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { motion, useTransform } from "framer-motion";
import { useEffect } from "react";

const SingleProject = ({
  project,
  index,
  range,
  targetScale,
  progress,
  activeId,
  setActiveId,
}) => {
  const {
    name,
    title,
    details,
    technology,
    img,
    instruction,
    webLink,
    gitLink,
    id,
  } = project;

  const scale = useTransform(progress, range, [1, targetScale]);
  let isActive = activeId === id;

  // Click handler to set active project
  const handleClick = () => {
    setActiveId(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActiveId(null); // Reset active state when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveId]);

  const bgColor =
    id == 1
      ? "bg-[#374351]"
      : id == 2
      ? "bg-[#2b3641]"
      : id == 3
      ? "bg-[#2a3642]"
      : id == 4
      ? "bg-[#27333e]"
      : id == 5
      ? "bg-[#26323e]"
      : id == 6
      ? "bg-[#24303c]"
      : id == 7
      ? "bg-[#222e3a]"
      : id == 8
      ? "bg-[#1e2a36]"
      : id == 9
      ? "bg-[#171f32]"
      : id == 10
      ? "bg-[#141d30]"
      : "bg-[#141d30]";

  // 303d5a
  // 2a3651
  // 232e47
  // 1d273e
  // 171f32
  // 141d30
  return (
    <motion.div
      style={{
        scale: scale,
        transformOrigin: "top",
        top: `calc(120px + ${index * 32}px)`,
        zIndex: isActive ? 20 : 10,
      }}
      className={`sticky transition-all duration-300 rounded-md ${
        isActive ? "z-20 project-shadow" : "z-10"
      }`}
      onClick={() => handleClick(id)}
    >
      <div
        className={`group relative grid  grid-cols-12  min-h-[380px] rounded-md shadow-md hover:shadow-2xl ${bgColor} `}
      >
        <div
          className={`lg:col-span-5 col-span-12 pb-5 pt-3 px-5 border-t border-gray-600 rounded-l-md`}
        >
          <a
            className="group-hover:text-brand1 inline-block"
            href={webLink}
            target="_blank"
          >
            <h3 className="text-2xl  font-semibold">{name}</h3>
          </a>
          <p className="text-lg lg:text-xl text-gray-200 mt-1">{title}</p>
          <ul className="flex gap-2 flex-wrap mt-14">
            {technology?.map((skill, index) => {
              return (
                <li
                  key={index}
                  className="bg-[#e5e5e5] shadow text-bg1 text-base px-4 md:py-1.5 py-1 rounded font-medium"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
          {/* external link buttons */}
          <div className="flex gap-3">
            <a href={webLink} target="_blank">
              <button className="group/btn py-3 px-5 text-sm font-medium text-white mt-6 bg-[#1c242e]  bg-opacity-85 border border-gray-600 hover:border-gray-700 rounded hover:bg-opacity-80 flex items-center gap-2">
                <span>Web Link</span>
                <LuExternalLink
                  className="group-hover/btn:text-brand1"
                  size={16}
                />
              </button>
            </a>
            <a href={gitLink} target="_blank">
              <button className=" group/btn py-3 px-5 text-sm font-medium text-white mt-6 bg-[#1c242f] bg-opacity-85 border border-gray-600 hover:border-gray-700 transition-all rounded hover:bg-opacity-80  flex items-center gap-2">
                <span>Github link</span>
                <FaGithub className="group-hover/btn:text-brand1" size={16} />
              </button>
            </a>
          </div>
        </div>

        {/* project banner */}
        <div className="lg:col-span-7 col-span-12 rounded-r-md bg-gray-500 relative ">
          <div className="h-[380px] overflow-hidden rounded-r-md">
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="demo-img-bg rounded-r-md bg-[#213e62d8]"
            ></div>
          </div>
          <div className="absolute h-full w-[100.5%] bg-gray-500 top-0 -right-[1px] opacity-0 bg-opacity-85 backdrop-blur-lg scale-50  transition-all z-10 group-hover:opacity-100 group-hover:scale-100 p-10 flex justify-center items-center overflow-hidden rounded-r-md">
            <p>{details}</p>
          </div>
        </div>
        {/*  */}
        {/* <div className="col-span-12 p-5 text-base lg:col-span-7 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:left-[41.67%] bg-gray-700 lg:bg-gray-700 color-white lg:opacity-0 lg:bg-opacity-85 lg:backdrop-blur-lg lg:scale-50  lg:transition-all lg:z-10 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:p-10 flex justify-center items-center overflow-hidden lg:rounded-r-md">
        <p>{details}</p>
      </div> */}
      </div>
    </motion.div>
  );
};

export default SingleProject;
