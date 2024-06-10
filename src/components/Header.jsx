import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className="sticky w-full top-0 z-40 ">
      <div className="bg-bg1 z-50">
        <div className="max-w-screen-2xl mx-auto  z-50 h-[68px] md:h-[78px]  px-4 md:px-8 text-white ">
          <div className="flex items-center justify-between h-full gap-[5rem]">
            {/* logo */}
            <div className="z-50">
              <span className="font-ibm text-[26px] text-brand1">naymur</span>
            </div>
            {/* nav */}
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-77}
                  duration={500}
                >
                  <li className="hover-underline-animation">Home</li>
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-75}
                  duration={500}
                >
                  <li className="hover-underline-animation">About</li>
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-72}
                  duration={500}
                >
                  <li className="hover-underline-animation">Projects</li>
                </Link>
                <Link
                  to="blogs"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                >
                  <li className="hover-underline-animation">Blogs</li>
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-72}
                  duration={500}
                >
                  <li className="hover-underline-animation">Contact</li>
                </Link>
              </ul>
            </nav>
            {/* button */}
            <button class="hidden md:block py-2.5 shadow-md px-5 text-base font-medium text-white bg-[#2d3645] border border-brand1  rounded-md hover:bg-opacity-60 tracking-wide">
              Resume
            </button>
            {/* mobile menu*/}
            <div className="md:hidden z-50">
              {/* menu icon */}
              <button
                onClick={handleClick}
                className={`h-7 w-7  relative cursor-pointer transition ease-in-out ${
                  toggle && "active"
                }`}
              >
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
                <span className="bar bar-4"></span>
              </button>
            </div>
          </div>
          <div className="w-full relative h-[1px] bg-grey z-20"></div>
        </div>
      </div>
      {/* responsive mobile menu */}
      <div
        className={` -translate-x-[100%] md:hidden absolute bg-bg1 top-[69px] min-h-[350px] h-full w-full transition duration-200 ease-linear shadow-md z-0 text-white py-8 px-4  ${
          toggle && "translate-x-0"
        }`}
      >
        <div className="flex h-full justify-center items-center">
          <nav className="">
            <ul className=" text-xl text-center pr-4">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-77}
                duration={500}
                onClick={handleClick}
              >
                <li className="hover-underline-animation  mb-2 inline-block">
                  Home
                </li>
              </Link>

              <br />
              <Link
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-70}
                duration={500}
                onClick={handleClick}
              >
                <li className="hover-underline-animation  mb-2 inline-block">
                  About
                </li>
              </Link>

              <Link
                to="projects"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={500}
                onClick={handleClick}
              >
                <li className="hover-underline-animation mb-2">Projects</li>
              </Link>
              <Link
                to="blogs"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                onClick={handleClick}
              >
                <li className="hover-underline-animation mb-2 inline-block">
                  Blogs
                </li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={500}
                onClick={handleClick}
              >
                <li className="hover-underline-animation mb-2">Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
        {/* <div className="bottom-0 absolute w-full h-[1px] mr-4 bg-grey"></div> */}
      </div>
    </header>
  );
};

export default Header;
