import Button from "../Button/Button";
import SectionWraper from "../SectionWraper/SectionWraper";

const UpdateIntro = () => {
  return (
    <SectionWraper>
      <h2 className="uppercase mb-2 text-brand3">Update Intro</h2>
      <form className="flex flex-col gap-1">
        <textarea
          className="text-black rounded px-2 py-1 bg-gray-100"
          rows={3}
          placeholder="Input your Intro"
        ></textarea>
        <Button>Submit</Button>
      </form>
    </SectionWraper>
  );
};

export default UpdateIntro;
