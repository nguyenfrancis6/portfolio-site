import React from "react";
import placeholder from "../assets/placeholder.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import resume from "../assets/FrancisNguyen_resume.pdf";

const Intro = () => {
  return (
    <section className="flex min-h-96 justify-center max-w-7xl mx-12 xl:mx-auto my-14 gap-4 bg-blue-900 p-8 rounded-2xl items-center">
      <div className="h-full max-w-xs md:max-w-lg flex flex-col gap-3 w-full">
        <h1 className="font-bold text-5xl text-white">Hi, I'm Francis</h1>
        <h2 className="text-2xl text-gray-500">Software Developer</h2>
        <p className="leading-7 text-white text-lg max-w-sm">
          I am a recent college graduate with a degree in Computer Science from
          Cal Poly Pomona with expertise in software and web development.
          <span className="hidden md:inline">
            {" "}I am eager in learning new technologies and tools to implement in my
            work.
          </span>
          {" "}Check out my projects!
        </p>
        <div className="flex text-white gap-4 text-2xl pt-2">
          <a
            href="https://www.linkedin.com/in/francisnnguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nguyenfrancis6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-200"
          >
            <FaGithub />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-200"
          >
            <IoIosDocument />
          </a>
        </div>
      </div>
      <div className="h-full hidden sm:block">
        <img src={placeholder} alt="" />
      </div>
    </section>
  );
};

export default Intro;
