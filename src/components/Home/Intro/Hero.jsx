import { Link } from "react-scroll";
import { Element } from "react-scroll";
import naymur from "../../../assets/img/nr-profile.png";
import naymur1 from "../../../assets/img/naymur.png";

const Hero = () => {
  return (
    <Element name="home" className="section">
      <section className="bg-bg1 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-8 md:py-0 pt-16 flex flex-col md:items-center md:flex-row gap-8 min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)] ">
          <div className="md:w-3/5 flex flex-col gap-8 ">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl md:text-3xl font-medium tracking-wider">
                Hi ! I am
              </h1>
              <h1 className="text-brand1 text-4xl md:text-7xl font-semibold py-2">
                Naymur Rahman
              </h1>
              <h1 className="text-2xl md:text-4xl font-bold">
                A Web Developer.
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
                  className="text-white bg-[#2d3645] border border-[#55666e] hover:border-[#47585f] hover:bg-[#374151]  font-medium rounded-full text-sm lg:px-7 px-5 py-2.5 lg:py-4"
                >
                  Contact with Me
                </button>
              </Link>

              <Link to="projects" smooth={true} offset={-60} duration={500}>
                <button
                  type="button"
                  className="text-white bg-[#2d3645] border border-[#55666e] hover:border-[#47585f] hover:bg-[#374151]  font-medium rounded-full text-sm lg:px-7 px-5 py-2.5 lg:py-4"
                >
                  Check Projects
                </button>
              </Link>
            </div>
          </div>
          {/*     md:w-[370px] */}
          <div className="md:w-2/5 flex items-center min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)] relative ">
            {/* h-[400px] w-[370px] */}
            {/* <div>a</div> */}
            {/* <img
            className="bg-[#292F36] h-[400px] w-[370px] rounded-xl"
            src={naymur}
            alt="Naymur Rahman"
          /> */}
            <img
              className="absolute -bottom-1 left-0 bg-[#292F36] h-[580px] w-full rounded-xl"
              src={naymur1}
              alt="Naymur Rahman"
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
