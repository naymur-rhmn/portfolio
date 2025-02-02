import React from "react";

const ProjectItem = ({ name, img, id }) => {
  return (
    <div className="flex justify-between items-center bg-zinc-900 hover:bg-zinc-800 transition-all mt-2 py-2 h-20 rounded-md px-4">
      <p>{name}</p>
      <img src={img} alt={name} />
      <div className="flex gap-2">
        <div className="bg-slate-600 rounded-md py-2 px-3 text-[15px] font-medium cursor-pointer">
          Update
        </div>
        <div className="bg-red-400 rounded-md py-2 px-3 text-black font-medium text-[15px] cursor-pointer">
          Delete
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
