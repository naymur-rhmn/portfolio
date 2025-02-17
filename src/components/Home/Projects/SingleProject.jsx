import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const SingleProject = ({ project, index, range, targetScale, progress }) => {
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

  const bgColor = [1, 2, 3].includes(id)
    ? "bg-gray-700"
    : [4, 5, 6].includes(id)
    ? "bg-gray-800"
    : [7, 8, 9].includes(id)
    ? "bg-gray-900"
    : [10, 11, 12].includes(id)
    ? "bg-gray-700"
    : [13, 14, 15].includes(id)
    ? "bg-gray-800"
    : "bg-gray-700";

  return (
    <motion.div
      style={{
        scale: scale,
        // transform: `translateY(${120 + index * 30}px)`,
        transformOrigin: "top",
        top: `calc(120px + ${index * 30}px)`,
      }}
      className="sticky"
    >
      <div
        className={`group relative grid items-center grid-cols-12  min-h-[380px] rounded-md shadow-md hover:shadow-2xl ${bgColor} `}
      >
        <div className={`lg:col-span-5 col-span-12 p-5`}>
          <a
            className="group-hover:text-brand1 inline-block"
            href={webLink}
            target="_blank"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold">{name}</h3>
          </a>
          <p className="text-lg lg:text-xl text-gray-200 mt-1">{title}</p>
          <ul className="flex gap-2 flex-wrap mt-3">
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
              <button className="group/btn py-3 px-5 text-sm font-medium text-white mt-6 bg-[#26303F] rounded hover:bg-opacity-80 flex items-center gap-2">
                <span>Web Link</span>
                <LuExternalLink
                  className="group-hover/btn:text-brand1"
                  size={16}
                />
              </button>
            </a>
            <a href={gitLink} target="_blank">
              <button className=" group/btn py-3 px-5 text-sm font-medium text-white mt-6 bg-[#26303F] rounded hover:bg-opacity-80  flex items-center gap-2">
                <span>Github link</span>
                <FaGithub className="group-hover/btn:text-brand1" size={16} />
              </button>
            </a>
          </div>
        </div>
        {/* project banner */}
        <div className="lg:col-span-7 col-span-12 rounded-r-md bg-gray-500 relative ">
          <div className="h-[380px] overflow-hidden">
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="demo-img-bg lg:rounded-r-md bg-[#353d47d8]"
            ></div>
          </div>
          <div className="absolute h-full w-full bg-gray-500 top-0 left-0 opacity-0 bg-opacity-85 backdrop-blur-lg scale-50  transition-all z-10 group-hover:opacity-100 group-hover:scale-100 p-10 flex justify-center items-center overflow-hidden rounded-r-md">
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
