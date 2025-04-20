import { useRef, useState } from "react";
import { Element } from "react-scroll";
import { motion, useScroll } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
// import project1 from "../../assets/img/project-1.png";
// import project2 from "../../assets/img/project-2.jpg";
import SingleProject from "./SingleProject";
import restaurant from "../../../assets/img/restaurant.png";
import nourish from "../../../assets/img/nourish-organic.png";

const Projects = () => {
  const [activeId, setActiveId] = useState(null);
  const projects = [
    {
      id: 1,
      name: "Nourish Organic",
      title: "Fullstack organic food website",
      details:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Bootstrap",
      ],
      img: nourish,
      instruction: "",
      webLink: "https://organic-food-3a04d.web.app",
      gitLink: "https://github.com/naymur-rhmn/organic-food",
    },
    {
      id: 2,
      name: "Kamakura Restaurant",
      title: "Fullstack restaurant website",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      img: restaurant,
      instruction: "",
      webLink: "https://restaurant-38c89.web.app/",
      gitLink: "https://github.com/naymur-rhmn/restaurant",
    },
    {
      id: 3,
      name: "Kamakura Restaurant",
      title: "Fullstack restaurant website",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      img: restaurant,
      instruction: "",
      webLink: "https://restaurant-38c89.web.app/",
      gitLink: "https://github.com/naymur-rhmn/restaurant",
    },
    {
      id: 4,
      name: "Kamakura Restaurant",
      title: "Fullstack restaurant website",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      img: restaurant,
      instruction: "",
      webLink: "https://restaurant-38c89.web.app/",
      gitLink: "https://github.com/naymur-rhmn/restaurant",
    },
    {
      id: 5,
      name: "Kamakura Restaurant",
      title: "Fullstack restaurant website",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      img: restaurant,
      instruction: "",
      webLink: "https://restaurant-38c89.web.app/",
      gitLink: "https://github.com/naymur-rhmn/restaurant",
    },
    {
      id: 6,
      name: "Kamakura Restaurant",
      title: "Fullstack restaurant website",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      img: restaurant,
      instruction: "",
      webLink: "https://restaurant-38c89.web.app/",
      gitLink: "https://github.com/naymur-rhmn/restaurant",
    },
    // {
    //   id: 7,
    //   name: "Kamakura Restaurant",
    //   title: "Fullstack restaurant website",
    //   details:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
    //   technology: [
    //     "Javascript",
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "TailwindCSS",
    //   ],
    //   img: restaurant,
    //   instruction: "",
    //   webLink: "https://restaurant-38c89.web.app/",
    //   gitLink: "https://github.com/naymur-rhmn/restaurant",
    // },
    // {
    //   id: 8,
    //   name: "Kamakura Restaurant",
    //   title: "Fullstack restaurant website",
    //   details:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
    //   technology: [
    //     "Javascript",
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "TailwindCSS",
    //   ],
    //   img: restaurant,
    //   instruction: "",
    //   webLink: "https://restaurant-38c89.web.app/",
    //   gitLink: "https://github.com/naymur-rhmn/restaurant",
    // },
    // {
    //   id: 9,
    //   name: "Kamakura Restaurant",
    //   title: "Fullstack restaurant website",
    //   details:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
    //   technology: [
    //     "Javascript",
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "TailwindCSS",
    //   ],
    //   img: restaurant,
    //   instruction: "",
    //   webLink: "https://restaurant-38c89.web.app/",
    //   gitLink: "https://github.com/naymur-rhmn/restaurant",
    // },
  ];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <Element name="projects" className="section">
      <section className="bg-bg1">
        <div className="max-w-screen-xl mx-auto px-8 py-14 md:py-20  min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)] h-full">
          <SectionTitle title="Projects" subtitle="A Showcase of My Work" />
          <div className="flex items-center w-full relative">
            <div
              ref={container}
              className="mt-14 md:mt-20 flex flex-col gap-10 relative"
            >
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;

                return (
                  <SingleProject
                    key={project.id}
                    index={i}
                    project={project}
                    range={[i * 0.05, 1]}
                    targetScale={targetScale}
                    progress={scrollYProgress}
                    activeId={activeId}
                    setActiveId={setActiveId}
                  ></SingleProject>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
