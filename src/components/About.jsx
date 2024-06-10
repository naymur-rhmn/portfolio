import { useState } from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  const [tabs, setTabs] = useState(1);

  const handleTab = (index) => {
    setTabs(index);
  };

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
  ];

  return (
    <section name="about" className="bg-bg2">
      <div className="max-w-screen-xl mx-auto px-8  py-16  min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)] flex items-center">
        <div className="">
          <SectionTitle title={"About me"} subtitle={""} />
          <div className="grid grid-cols-12 gap-6 md:gap-12 mt-12 lg:mt-20">
            <div className="col-span-12 md:col-span-6 text-gray-100  pr-5">
              <h2 className="text-2xl lg:text-3xl mb-6 font-semibold tracking-wide ">
                This is Naymur Rahman
              </h2>
              <div>
                {/* tabs */}
                <div>
                  <ul className="flex gap-8">
                    <li
                      onClick={() => handleTab(1)}
                      className={`text-lg lg:text-xl font-medium hover:text-brand1 cursor-pointer transition-all ${
                        tabs === 1 ? "text-brand1" : "text-gray-400"
                      }`}
                    >
                      My Story
                    </li>
                    <li
                      onClick={() => handleTab(2)}
                      className={`text-lg lg:text-xl font-medium hover:text-brand1 cursor-pointer transition-all ${
                        tabs === 2 ? "text-brand1" : "text-gray-400"
                      }`}
                    >
                      Experience
                    </li>
                    <li
                      onClick={() => handleTab(3)}
                      className={`text-lg lg:text-xl font-medium hover:text-brand1 cursor-pointer transition-all ${
                        tabs === 3 ? "text-brand1" : "text-gray-400"
                      }`}
                    >
                      Education
                    </li>
                  </ul>
                </div>
                {/* tab content */}
                <div className="mt-6 min-h-[300px] pr-10">
                  {/* story */}
                  <div className={tabs === 1 ? "block" : "hidden"}>
                    <p className=" mb-3 font-normal">
                      I have always been fascinated by technology.This passion
                      for technology eventually led me to the world of web
                      development, where I could merge creativity with
                      functionality, and build things that could be accessed and
                      appreciated by anyone, anywhere.
                    </p>
                    <p className=" mb-3 font-normal">
                      Embarking on this journey, I committed myself to at least
                      two years of intensive learning and practice. I started
                      with the basics of HTML, CSS, and JavaScript, laying a
                      solid foundation before moving on to more complex topics.
                      Learning React was a particularly exciting milestone.
                    </p>
                    <p className=" mb-3 font-normal">
                      Throughout this journey, I have prided myself on being
                      responsible and dedicated.
                    </p>
                  </div>
                  {/* experience */}
                  <div className={tabs === 2 ? "block" : "hidden"}>
                    <p className=" mb-3 font-normal">
                      To solidify my knowledge, I started building projects.
                      From simple landing pages to complex applications with
                      dynamic content and user authentication, each project was
                      a testament to my growing skills.
                    </p>
                    <p>
                      When I stacked on any problem, I tried to find solution on
                      web and also seeking feedback from the community further
                      enhanced my learning experience. These projects not only
                      improved my technical skills but also taught me the
                      importance of clean code, user experience, and efficient
                      problem-solving.
                    </p>
                  </div>
                  {/* education */}
                  <div className={tabs === 3 ? "block" : "hidden"}>
                    <p className=" mb-3 font-normal">
                      This year I completed my bachelor of Science final exam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl lg:text-3xl mb-6 font-semibold tracking-wide ">
                My Skills
              </h2>
              <ul className="flex gap-4 flex-wrap">
                {skills?.map((skill, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-[#b0afaf] shadow text-bg1 text-lg md:text-xl px-4 py-2.5 rounded font-medium"
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
