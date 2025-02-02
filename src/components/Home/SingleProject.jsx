import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";

const SingleProject = ({ project }) => {
  const {
    name,
    title,
    details,
    technology,
    img,
    instruction,
    webLink,
    gitLink,
  } = project;
  return (
    <div className="group relative grid items-center grid-cols-12 bg-gray-700 min-h-[390px] rounded-md shadow hover:shadow-2xl">
      <div className="lg:col-span-5 col-span-12  p-5">
        <a
          className="hover:text-brand1 inline-block"
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
                className="bg-[#d1cfcf] shadow text-bg1 text-lg px-4 py-1.5 lg:py-2 rounded font-medium"
              >
                {skill}
              </li>
            );
          })}
        </ul>
        {/* buttons */}
        <div className="flex gap-3">
          <a href={webLink} target="_blank">
            <button class="group/btn py-3 px-5 text-sm font-medium text-white mt-6 bg-[#26303F] rounded hover:bg-opacity-80 flex items-center gap-2">
              <span>Web Link</span>
              <LuExternalLink
                className="group-hover/btn:text-brand1"
                size={16}
              />
            </button>
          </a>
          <a href={gitLink} target="_blank">
            <button class=" group/btn py-3 px-5 text-sm font-medium text-white mt-6 bg-[#26303F] rounded hover:bg-opacity-80  flex items-center gap-2">
              <span>Github link</span>
              <FaGithub className="group-hover/btn:text-brand1" size={16} />
            </button>
          </a>
        </div>
      </div>
      {/*  */}
      <div className=" lg:col-span-7 col-span-12 rounded-r-md bg-gray-500 ">
        <div className="h-[390px] overflow-hidden">
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="demo-img-bg lg:rounded-r-md"
          ></div>
        </div>
      </div>
      {/*  */}
      <div className="col-span-12 p-5 text-base lg:col-span-7 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:left-[41.67%] bg-gray-700 lg:bg-gray-700 color-white lg:opacity-0 lg:bg-opacity-85 lg:backdrop-blur-lg lg:scale-50  lg:transition-all lg:z-10 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:p-10 flex justify-center items-center overflow-hidden lg:rounded-r-md">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SingleProject;
