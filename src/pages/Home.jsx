import About from "../components/Home/About";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
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
