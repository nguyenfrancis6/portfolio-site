import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-2xl pr-2">
          <a href="https://www.linkedin.com/in/francisnnguyen/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nguyenfrancis6" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-5 text-lg pl-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">©2024 Francis Nguyen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
