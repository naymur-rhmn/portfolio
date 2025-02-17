import Header from "../components/Home/Header/Header";
import Hero from "../components/Home/Intro/Hero";
import About from "../components/Home/AboutMe/About";
import Projects from "../components/Home/Projects/Projects";
import Blog from "../components/Home/Blogs/Blog";
import Contact from "../components/Home/Contact/Contact";
import Footer from "../components/Home/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Services from "../components/Home/Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* <Services /> */}
      <Blog />
      <Contact />
      <Footer />
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Home;
