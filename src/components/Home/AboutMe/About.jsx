import { useState } from "react";
import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle/SectionTitle";
import Skills from "./Skills";
import TechStackCard from "./TechStackCard";
import Info from "./Info";

const About = () => {
  const [tabs, setTabs] = useState(1);

  const handleTab = (index) => {
    setTabs(index);
  };
  const softSkills = [
    "Communication skills",
    "Problem Solving",
    "fast & deep learning",
    "Quality assurance",
    "Adaptive Mindset",
    "Resource findout",
    "Time management",
    "AI",
  ];

  return (
    <Element name="about" className="section">
      <section className="bg-bg2">
        <div className="max-w-screen-xl mx-auto px-8  py-16  min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)] flex items-center">
          <div className="">
            <SectionTitle title={"About me"} subtitle={""} />
            <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 mt-12 lg:mt-20">
              {/* first grid item */}
              <div className="col-span-12 md:col-span-6 text-gray-100  pr-5">
                <Info />
                <div className="mt-6  text-center">
                  <div className="grid grid-cols-2 gap-2 mb-2 text-center">
                    <TechStackCard>
                      <h2 className="text-lg text-gray-100">
                        Expert in Front-End
                      </h2>
                    </TechStackCard>
                    <TechStackCard>
                      <h2 className="text-lg text-gray-100">
                        Familiar with Backend
                      </h2>
                    </TechStackCard>
                  </div>
                  <TechStackCard>
                    <h2 className="text-lg text-gray-50">
                      Team Player in Fullstack
                    </h2>
                  </TechStackCard>
                </div>
              </div>

              {/* second grid item */}
              {/* skills */}
              <div className="col-span-12 md:col-span-6">
                <h2 className="text-2xl lg:text-3xl mb-4 font-semibold tracking-wide ">
                  Core Skills
                </h2>
                <Skills />
                <div className="mt-6">
                  <h2 className="text-2xl lg:text-3xl mb-4 font-semibold tracking-wide mt-4">
                    Soft Skills
                  </h2>
                  <ul className="flex gap-3 flex-wrap">
                    {softSkills.map((skill, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-bg1 px-4 py-2.5 rounded-md capitalize font-semibold text-gray-200"
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
        </div>
      </section>
    </Element>
  );
};

export default About;
