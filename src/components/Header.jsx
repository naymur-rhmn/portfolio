import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(0);

  const handleMenuToggle = (index) => {
    setMenuToggle(index);
  };

  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className="sticky w-full top-0 z-40 ">
      <div className="bg-bg1 z-50">
        <div className="max-w-screen-2xl mx-auto  z-50 h-[68px] md:h-[78px]  px-4 md:px-8 text-white ">
          <div className="flex items-center justify-between h-full gap-[5rem]">
            {/* logo */}
            <Link
              to="home"
              smooth={true}
              offset={-77}
              duration={500}
              onClick={() => handleMenuToggle(0)}
            >
              <div className="z-50 cursor-pointer">
                <span className="font-ibm text-[26px] text-brand1">naymur</span>
              </div>
            </Link>

            {/* nav */}
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <Link
                  to="home"
                  activeClass="menu-active"
                  smooth={true}
                  offset={-77}
                  duration={500}
                  className={`hover-underline-animation ${
                    menuToggle === 0 ? "menu-active" : ""
                  }`}
                  onClick={() => handleMenuToggle(0)}
                >
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  offset={-75}
                  duration={500}
                  className={`hover-underline-animation ${
                    menuToggle === 1 ? "menu-active" : ""
                  }`}
                  onClick={() => handleMenuToggle(1)}
                >
                  About
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  offset={-69}
                  duration={500}
                  className={`hover-underline-animation ${
                    menuToggle === 2 ? "menu-active" : ""
                  }`}
                  onClick={() => handleMenuToggle(2)}
                >
                  Projects
                </Link>
                <Link
                  to="blogs"
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className={`hover-underline-animation ${
                    menuToggle === 3 ? "menu-active" : ""
                  }`}
                  onClick={() => handleMenuToggle(3)}
                >
                  Blogs
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-30}
                  duration={500}
                  className={`hover-underline-animation ${
                    menuToggle === 4 ? "menu-active" : ""
                  }`}
                  onClick={() => handleMenuToggle(4)}
                >
                  Contact
                </Link>
              </ul>
            </nav>
            {/* button */}
            <button class="hidden md:block py-2.5 shadow-md px-5 text-sm font-medium text-white bg-[#2d3645] border border-brand1  rounded-md hover:bg-opacity-60 tracking-wide">
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
                smooth={true}
                offset={-40}
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
