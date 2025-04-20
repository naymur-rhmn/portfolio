import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-bg2">
      <div className="h-full min-h-[56px] max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row gap-2  items-center justify-between">
        <p className="text-sm text-center md:text-left">
          &copy; 2024 Design and Developed by Naymur.
        </p>

        <div>
          <ul className="flex gap-4">
            <li>
              <a
                className="group"
                href="https://www.linkedin.com/in/naymur-mn"
                target="_blank"
              >
                <IoLogoLinkedin className="group-hover:text-brand1" size={18} />
              </a>
            </li>
            <li>
              <a
                className="group"
                href="https://github.com/naymur-rhmn"
                target="_blank"
              >
                <IoLogoGithub className="group-hover:text-brand1" size={19} />
              </a>
            </li>

            <li>
              <a
                className="group"
                href="https://www.facebook.com/naymurmn"
                target="_blank"
              >
                <IoLogoFacebook className="group-hover:text-brand1" size={20} />
              </a>
            </li>
            <li>
              <a
                className="group"
                href="https://wa.me/8801762750191"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="group-hover:text-brand1" size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
