import logo from "../assets/f-logo.png";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";
import ScrollLink from "./ScrollLink";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header className="bg-white sticky top-0 shadow-md transition-all duration-500 z-50 dark:bg-black dark:shadow-gray-400 dark:shadow-md">
      <nav className="flex max-w-7xl w-full mx-auto justify-between items-center h-20 dark:text-white">
        <ScrollLink to="/" className="flex items-center pl-8 xl:pl-0">
          <img className="h-16 w-auto dark:invert transition duration-500" src={logo} alt="logo" />
          <p className="hidden sm:block text-2xl font-bold">Francis Nguyen</p>
        </ScrollLink>

        <ul className="flex items-center gap-3 md:gap-5 text-lg pr-8 xl:pr-0">
          <li>
            <ScrollLink
              to="/"
              className="hover:text-blue-700 transition-all duration-200"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="/contact"
              className="hover:text-blue-700 transition-all duration-200"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <button
              className="flex items-center hover:text-blue-700 transition-all duration-200"
              onClick={() => darkModeHandler()}
            >
              {isDarkMode && <MdOutlineWbSunny />}
              {!isDarkMode && <FaRegMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
