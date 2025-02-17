import { useState } from "react";
import SectionWraper from "../SectionWraper/SectionWraper";

const AddProject = ({ onSubmit }) => {
  const [project, setProject] = useState({
    title: "",
    subtitle: "",
    technologies: [],
    liveLink: "",
    githubLink: "",
    image: null,
    description: "",
  });

  const [techInput, setTechInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setProject((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleAddTechnology = () => {
    if (techInput.trim() !== "") {
      setProject((prev) => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()],
      }));
      setTechInput("");
    }
  };

  const handleSubmit = () => {
    onSubmit(project);
    setProject({
      title: "",
      subtitle: "",
      technologies: [],
      liveLink: "",
      githubLink: "",
      image: null,
      description: "",
    });
  };

  return (
    <SectionWraper>
      <div className="bg-[#1C1D21] rounded-lg p-6">
        <h2 className="text-2xl  font-bold text-brand3 mb-4 text-center">
          Add New Project
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Project Title */}
          <div>
            <label className="block font-medium">Project Title:</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="Input Project Title"
              className="w-full p-2 border mb-3  rounded-md text-black  bg-gray-100"
            />
          </div>

          {/* Project Subtitle */}
          <div>
            <label className="block font-medium">Project Subtitle:</label>
            <input
              type="text"
              name="subtitle"
              value={project.subtitle}
              onChange={handleChange}
              placeholder="Input Project Sub Title"
              className="w-full p-2 mb-3 border rounded-md text-black  bg-gray-100"
            />
          </div>
        </div>

        {/* Technologies */}
        <label className="block font-medium">Technologies Used:</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="Input Tech Name"
            className="flex-grow p-2 border rounded-md text-black bg-gray-100"
          />
          <button
            onClick={handleAddTechnology}
            className="bg-brand3 hover:bg-opacity-80 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="mt-2 mb-2 flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <div>
              <span
                key={idx}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg"
              >
                {tech}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3">
          {/* Live Link */}
          <div>
            <label className="block font-medium ">Live Link:</label>
            <input
              type="url"
              name="liveLink"
              value={project.liveLink}
              onChange={handleChange}
              placeholder="Input Live Link"
              className="w-full p-2 mb-3 border rounded-md text-black  bg-gray-100"
            />
          </div>

          {/* GitHub Link */}
          <div>
            <label className="block font-medium">GitHub Link:</label>
            <input
              type="url"
              name="githubLink"
              value={project.githubLink}
              onChange={handleChange}
              placeholder="Input Github Link"
              className="w-full p-2 mb-3 border rounded-md text-black bg-gray-100"
            />
          </div>
        </div>

        {/* Image Upload */}
        <label className="block font-medium">Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-md text-black bg-gray-100"
        />

        {/* Project Description */}
        <label className="block font-medium mt-3">Project Description:</label>
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Project Brief Description"
          className="w-full p-2 border rounded-md text-black h-24  bg-gray-100"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white mt-3 py-3 rounded-lg"
        >
          Submit Project
        </button>
      </div>
    </SectionWraper>
  );
};

export default AddProject;
