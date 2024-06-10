import React from "react";

const SingleBlog = ({ blog }) => {
  return (
    <div className="bg-[#292F36] pb-5 rounded-md">
      <div className="h-[240px] w-full">
        <img className="h-full w-full rounded-t-md" src={blog.img} alt="" />
      </div>
      <div className="px-4 min-h-[130px]">
        <a
          className="text-gray-300 hover:text-gray-200"
          href="#"
          target="_blank"
        >
          <h3 className="text-2xl md:text-2xl font-semibold mt-4 mb-3">
            {blog.title.length > 30
              ? blog.title.slice(0, 30) + "..."
              : blog.title}
          </h3>
        </a>
        <p className="text-gray-200">{blog.desc.slice(0, 70)}...</p>
      </div>
    </div>
  );
};

export default SingleBlog;
