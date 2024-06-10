import SectionTitle from "./SectionTitle";
import project1 from "../assets/img/project-1.png";
import project2 from "../assets/img/project-2.jpg";
import restaurant from "../assets/img/restaurant.png";
import nourish from "../assets/img/nourish-organic.png";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Nourish Organic",
      title: "fullstack organic food website",
      details:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Html",
        "CSS",
        "TailwindCSS",
        "Bootstrap",
      ],
      img: nourish,
      instruction: "",
      webLink: "",
      gitLink: "",
    },
    {
      id: 2,
      name: "Kamakura Restaurant",
      title: "Fullstack restaurant website",
      details:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Html",
        "CSS",
        "TailwindCSS",
      ],
      img: restaurant,
      instruction: "",
      webLink: "",
      gitLink: "",
    },
    {
      id: 3,
      name: "Travel Agency",
      title: "Fullstack  website",
      details:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem mollitia eius velit corporis! Facere harum accusantium quos eum neque vel ex.",
      technology: [
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Html",
        "CSS",
        "TailwindCSS",
      ],
      img: project1,
      instruction: "",
      webLink: "",
      gitLink: "",
    },
  ];

  return (
    <section id="projects" className="bg-bg1">
      <div className="max-w-screen-xl mx-auto px-8 py-14 lg:py-20  min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)] flex items-center">
        <div className="w-full">
          <SectionTitle title="Projects" subtitle=" A Showcase of My Work" />
          {/* projects */}
          <div className="mt-14 lg:mt-20 flex flex-col gap-10">
            {/* single project */}
            {projects.map((project) => (
              <SingleProject id={project.id} project={project}></SingleProject>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
