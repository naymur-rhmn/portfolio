import ProjectItem from "./ProjectItem";

const projects = [
  { id: 1, name: "izakaya restaurant", img: "" },
  { id: 2, name: "Food selling site", img: "" },
  { id: 3, name: "Tourist agency", img: "" },
];
const AllProjects = () => {
  return (
    <div className="mt-4 bg-dbBg2 rounded-md py-3 px-5">
      <div className="flex justify-between px-4">
        <p className="text-sm font-medium uppercase text-brand1">
          Project Name
        </p>
        <p className="text-sm font-medium uppercase text-brand1">
          Project Banner
        </p>
        <p className="text-sm font-medium uppercase text-brand1">Actions</p>
      </div>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          id={project.id}
          img={project.img}
        />
      ))}
    </div>
  );
};

export default AllProjects;
