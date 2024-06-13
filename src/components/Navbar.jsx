import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/f-logo.jpg";

const Navbar = () => {
  return (
    <header>
      <nav className="flex max-w-7xl w-full mx-auto justify-between items-center h-20">
        <Link to="/" className="flex items-center">
          <img className="h-16 w-auto" src={logo} alt="logo" />
          <p className="text-2xl font-bold">Francis Nguyen</p>
        </Link>

        <ul className="flex items-center gap-5 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-700 transition-all duration-200">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-700 transition-all duration-200">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
