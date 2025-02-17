import { useState } from "react";
import SectionWraper from "../SectionWraper/SectionWraper";

const AddSkills = () => {
  const predefinedSkills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Firebase",
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [customSkills, setCustomSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Handle checkbox selection
  const handleCheckboxChange = (skill) => {
    setSelectedSkills(
      (prev) =>
        prev.includes(skill)
          ? prev.filter((s) => s !== skill) // Remove if already selected
          : [...prev, skill] // Add if not selected
    );
  };

  // Handle adding custom skill
  const addCustomSkill = () => {
    if (newSkill.trim() && !customSkills.includes(newSkill)) {
      setCustomSkills([...customSkills, newSkill]);
      setSelectedSkills([...selectedSkills, newSkill]); // Select it by default
      setNewSkill("");
    } else {
      alert("Item Already Taken Or Empty Field");
    }
  };

  const handleSubmit = () => {
    console.log(selectedSkills);
  };

  return (
    <SectionWraper>
      <h2 className="text-lg font-bold mb-3">Select Your Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* skill list */}
        <div>
          {/* Predefined Skills */}
          <div className="mb-3">
            {predefinedSkills.map((skill) => (
              <label
                key={skill}
                className="flex items-center space-x-2 hover:bg-gray-500 rounded-sm"
              >
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleCheckboxChange(skill)}
                  className="mr-2"
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>

          {/* Custom Skills */}
          {customSkills.length > 0 && (
            <div className="mb-3">
              <h3 className="font-semibold">Custom Skills</h3>
              {customSkills.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center hover:bg-gray-500 rounded-sm space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => handleCheckboxChange(skill)}
                    className="mr-2"
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* Input to Add Custom Skill */}
          <div className="flex items-center space-x-2 mt-0">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              required
              placeholder="Add a new skill..."
              className="border p-2 rounded w-full text-black bg-gray-100"
            />
            <button
              onClick={addCustomSkill}
              className="bg-brand3 hover:bg-opacity-80 text-white px-3 py-2 rounded"
            >
              Add
            </button>
          </div>

          {/* Selected Skills Preview */}
          <div className="mt-4">
            <h3 className="font-semibold">Selected Skills:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedSkills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-500 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* submit to database */}
          <button
            onClick={handleSubmit}
            className="px-4 py-3 bg-brand3 rounded-md mt-4 w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </SectionWraper>
  );
};

export default AddSkills;
