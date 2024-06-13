import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/f-logo.jpg";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header>
      <nav className="flex max-w-7xl w-full mx-auto justify-between items-center h-20 dark:text-white">
        <Link to="/" className="flex items-center pl-8 xl:pl-0">
          <img className="h-16 w-auto dark:invert" src={logo} alt="logo" />
          <p className="hidden sm:block text-2xl font-bold">Francis Nguyen</p>
        </Link>

        <ul className="flex items-center gap-5 text-lg pr-12 xl:pr-0">
          <li>
            <Link to="/" className="hover:text-blue-700 transition-all duration-200">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-700 transition-all duration-200">Contact</Link>
          </li>
          <li>
            <button className="flex items-center hover:text-blue-700 transition-all duration-200" onClick={() => darkModeHandler()}> 
              {
                isDarkMode && <MdOutlineWbSunny />
              }
              {
                !isDarkMode && <FaRegMoon />
              }
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
