import Button from "../Button/Button";
import SectionWraper from "../SectionWraper/SectionWraper";

const UpdateAboutMe = () => {
  return (
    <SectionWraper>
      <h2 className="uppercase mb-2 text-brand3">Update About Me</h2>
      <form className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="field1"
            className="text-sm font-semibold text-gray-300"
          >
            First Field
          </label>
          <textarea
            name="field1"
            id=""
            rows="3"
            placeholder="Input Your Text"
            className=" bg-gray-100 rounded text-black py-1 px-2"
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="field2"
            className="text-sm font-semibold text-gray-300"
          >
            Second Field
          </label>
          <textarea
            name="field2"
            id="field2"
            rows="3"
            placeholder="Input Your Text"
            className=" bg-gray-100 rounded text-black py-1 px-2"
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="field3"
            className="text-sm font-semibold text-gray-300"
          >
            Third Field
          </label>
          <textarea
            name="field3"
            id="field3"
            rows="3"
            placeholder="Input Your Text"
            className=" bg-gray-100 rounded text-black py-1 px-2"
          ></textarea>
        </div>

        <Button>Submit</Button>
      </form>
    </SectionWraper>
  );
};

export default UpdateAboutMe;
