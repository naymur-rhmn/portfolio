import { useRef } from "react";

const PreviousResume = () => {
  const inputRefs = useRef([]);
  const inputs = ["Text One", "Text Two", "Text Three"];
  const handleCopy = (index) => {
    if (inputRefs.current[index]) {
      navigator.clipboard.writeText(inputRefs.current[index].value);
      alert("Copied: " + inputRefs.current[index].value);
    }
  };
  return (
    <div className="bg-dbBg2 rounded-md py-3 px-4 mt-4">
      <p className="text-center mb-1 ">
        You have updated resume{" "}
        <span className="text-brand1 font-bold">{0}</span> times
      </p>
      <p className="text-center mb-3 text-sm text-gray-300">
        All resume list shown below, last one served as readable resume in
        frontend
      </p>

      {/* resume lists */}
      <div className="flex flex-col w-full gap-2">
        {inputs.map((text, index) => (
          <div key={index} className="flex">
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              className="bg-grey outline-none px-4 py-1 rounded-l flex-1"
              type="text"
              value={text}
              readOnly
            />
            <button
              className="py-1 px-2 bg-green-600 hover:bg-opacity-80 transition-all rounded-r"
              onClick={() => handleCopy(index)}
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousResume;
