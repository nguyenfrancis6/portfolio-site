import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ScrollLink from "./ScrollLink";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-4 dark:bg-black dark:border-t-white border-solid border-t transition-all duration-500">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-2xl pr-2">
          <a href="https://www.linkedin.com/in/francisnnguyen/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-200">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nguyenfrancis6" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-200">
            <FaGithub />
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-5 text-lg pl-2">
            <li>
              <ScrollLink to="/" className="hover:text-gray-300 transition-all duration-200 dark:hover:text-blue-900">Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="/contact" className="hover:text-gray-300 transition-all duration-200 dark:hover:text-blue-900">Contact</ScrollLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">©{currentYear} Francis Nguyen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
