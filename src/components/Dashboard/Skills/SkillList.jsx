const skills = [
  "javascript",
  "typescript",
  "react.js",
  "TailwindCSS",
  "node.js",
  "express.js",
  "mongodb",
  "html",
  "css",
  "bootstrap",
  "materialUI",
  "responsive design",
  "git",
];
const SkillList = () => {
  return (
    <div className="bg-dbBg2 mt-4 rounded-md  py-3 px-5 flex gap-2 flex-wrap">
      {skills.map((skill) => {
        return (
          <div key={skill} className="bg-dbBg1 rounded-md px-6 py-3 capitalize">
            {skill}{" "}
          </div>
        );
      })}
      <div className="bg-dbBg1 rounded-md px-6 py-3 capitalize">🎓</div>
    </div>
  );
};

export default SkillList;
