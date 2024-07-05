import React from "react";
import instagram from "../assets/instagram.png";
import pokemon from "../assets/pokemonapp.png";
import nft from "../assets/nftsite.png";
import { FaGithub, FaLink } from "react-icons/fa";
import ScrollLink from "./ScrollLink";

const Projects = () => {
  const projectData = [
    {
      id: "1",
      title: "Instagram Clone",
      stack: "React, Firebase, ChakraUI",
      thumbnail: instagram,
      link: "https://insta-clone-lovat-sigma.vercel.app",
      github: "https://github.com/nguyenfrancis6/insta-clone",
      description:
        "An Instagram clone website where users can sign up with email/Google and be able to create posts, view profiles, comment, and follow others.",
    },
    {
      id: "2",
      title: "NFT Marketplace",
      stack: "React, HTML/CSS",
      thumbnail: nft,
      link: "https://nft-marketplace-roan-six-32.vercel.app",
      github: "https://github.com/nguyenfrancis6/nft-marketplace",
      description:
        "A site that emulates how a typical NFT website looks and functions. NFT and user data is fetched from a cloud server and displayed in multiple components.",
    },
    {
      id: "3",
      title: "Pokemon Web App",
      stack: "React, HTML/CSS",
      thumbnail: pokemon,
      link: "https://pokemon-liard-two.vercel.app",
      github: "https://github.com/nguyenfrancis6/pokemon",
      description:
        "A Pokemon web application that lets users search up any pokemon with data from the PokeAPI and browse through the Pokemon collection.",
    },
  ];
  return (
    <section
      id="proj"
      className="max-w-6xl flex flex-col items-center mx-auto gap-12 my-12 px-12"
    >
      <h1 className="font-bold text-4xl text-center dark:text-white">
        My Projects
      </h1>
      <ul className="flex flex-col gap-8">
        {projectData.map((project) => (
          <li key={project.id}>
            <div className="text-center w-full flex sm:flex-row flex-col justify-center items-center p-12 border bg-gray-300 dark:bg-black rounded gap-4 shadow-lg dark:border-white dark:shadow-gray-500 transition-all duration-500">
              <div className="h-full w-full">
                <img
                  className="rounded-xl min-h-20 min-w-40"
                  src={project.thumbnail}
                  alt={project.title}
                />
              </div>
              <div className="w-1/2 dark:text-white">
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl flex justify-center mb-2">
                  {project.title}
                </h1>
                <p className="hidden lg:block text-lg m-4">
                  {project.description}
                </p>
                <p className="flex justify-center text-lg">{project.stack}</p>
                <div className="flex justify-center items-center gap-6 mt-2 text-2xl">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ScrollLink to="/upcoming">
        <button className="bg-green-300 p-4 rounded shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-200">
          Click here to see what I'm cooking up 👨‍🍳
        </button>
      </ScrollLink>
    </section>
  );
};

export default Projects;
