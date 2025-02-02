import { Link } from "react-scroll";
import naymur from "../../assets/img/nr-profile.png";

const Hero = () => {
  return (
    <section name="home" className="bg-bg1">
      <div className="max-w-screen-xl mx-auto px-8  py-16 flex flex-col md:items-center  md:flex-row gap-8 min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)]">
        <div className="md:w-3/5 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-3xl font-medium tracking-wider">
              Hi ! I am{" "}
            </h1>
            <h1 className="text-brand1 text-4xl md:text-7xl font-semibold py-2">
              Naymur Rahman
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold">
              Frontend Developer.
            </h1>
          </div>
          <p className="text-balance tracking-wider">
            Creating intuitive and dynamic user experiences with a passion for
            clean, efficient code. Let's build something amazing together.
          </p>

          <div className="flex gap-4">
            <Link to="contact" smooth={true} offset={-60} duration={500}>
              <button
                type="button"
                class="text-white bg-[#2d3645] border border-[#55666e] hover:bg-[#374151]  font-medium rounded-full text-sm lg:px-7 px-5 py-2.5 lg:py-4"
              >
                Contact with me
              </button>
            </Link>

            <Link to="projects" smooth={true} offset={-60} duration={500}>
              <button
                type="button"
                class="text-white bg-[#2d3645] border border-[#55666e] hover:bg-[#374151]  font-medium rounded-full text-sm lg:px-7 px-5 py-2.5 lg:py-4"
              >
                Check Projects
              </button>
            </Link>
          </div>
        </div>
        {/*     md:w-[370px] */}
        <div className="md:w-2/5 flex items-center">
          <img
            className=" h-[400px] w-[370px] rounded-xl"
            src={naymur}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
