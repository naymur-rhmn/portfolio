import BlogItem from "./BlogItem";

const projects = [
  { id: 1, name: "izakaya restaurant", img: "" },
  { id: 2, name: "Food selling site", img: "" },
  { id: 3, name: "Tourist agency", img: "" },
];

const AllBlogs = () => {
  return (
    <div className="mt-4 bg-dbBg2 rounded-md py-3 px-5">
      <div className="flex justify-between px-4">
        <p className="text-sm font-medium uppercase text-brand1">Blog Name</p>
        <p className="text-sm font-medium uppercase text-brand1">Blog Banner</p>
        <p className="text-sm font-medium uppercase text-brand1">Actions</p>
      </div>

      {projects.map((project) => (
        <BlogItem
          key={project.id}
          name={project.name}
          id={project.id}
          img={project.img}
        />
      ))}
    </div>
  );
};

export default AllBlogs;
