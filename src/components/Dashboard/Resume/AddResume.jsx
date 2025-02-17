import { useState } from "react";

const AddResume = () => {
  const [resumeLink, setResumeLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (resumeLink.trim() === "") {
      alert("Please enter a valid Google Drive link!");
    } else {
      alert(`Submitted Link: ${resumeLink}`);
      // Handle link submission (e.g., send to backend)
    }
  };

  return (
    <div className="bg-dbBg2 rounded-md py-3 px-4 mt-4">
      <p className="text-center mb-1 ">Add new resume</p>
      <p className="text-center mb-3 text-sm text-gray-300">
        This resume will be available for user
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-full border border-gray-300 rounded-md overflow-hidden"
      >
        <input
          type="text"
          placeholder="Enter Google Drive link"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
          className="flex-1 p-2 border-none outline-none bg-gray-100 text-black"
        />
        <button
          type="submit"
          className=" text-white px-4 py-2 bg-green-600 hover:bg-opacity-80 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddResume;
