const skills = [
  "Javascript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Html",
  "CSS",
  "TailwindCSS",
  "Bootstrap",
  "MaterialUi",
  "Google Firebase",
  "Git",
  "Responsive design",
];
const Skills = () => {
  return (
    <ul className="flex lg:gap-4 md:gap-3 gap-2 flex-wrap">
      {skills?.map((skill, index) => {
        return (
          <li
            key={index}
            className="bg-gray-200 shadow text-bg1 text-lg md:text-xl px-4 lg:py-2.5 md:py-2 py-1.5 rounded font-medium"
          >
            {skill}
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
