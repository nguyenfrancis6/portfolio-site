import React from "react";
import instagram from "../assets/instagram.png";
import pokemon from "../assets/pokemonapp.png";
import nft from "../assets/nftsite.png";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      id: "1",
      title: "Instagram Clone",
      stack: "React, Firebase, ChakraUI",
      thumbnail: instagram,
      link: "https://insta-clone-lovat-sigma.vercel.app",
      github: "https://github.com/nguyenfrancis6/insta-clone",
    },
    {
      id: "2",
      title: "Pokemon Web App",
      stack: "React, HTML/CSS",
      thumbnail: pokemon,
      link: "https://pokemon-liard-two.vercel.app",
      github: "https://github.com/nguyenfrancis6/pokemon",
    },
    {
      id: "3",
      title: "NFT Marketplace",
      stack: "React, HTML/CSS",
      thumbnail: nft,
      link: "https://nft-marketplace-roan-six-32.vercel.app",
      github: "https://github.com/nguyenfrancis6/nft-marketplace",
    },
  ];
  return (
    <section className="max-w-6xl flex flex-col items-center mx-auto gap-12 my-12 px-12">
      <h1 className="font-bold text-4xl text-center">My Projects</h1>
      <ul className="flex flex-col gap-8">
        {projectData.map((project) => (
          <li key={project.id}>
            <div className="text-center w-full flex sm:flex-row flex-col justify-center items-center p-12 bg-gray-300 rounded gap-4">
              <div className="h-full w-full">
                <img
                  className="rounded min-h-20 min-w-40"
                  src={project.thumbnail}
                  alt=""
                />
              </div>
              <div className="w-1/2">
                <h1 className="font-bold text-sm sm:text-2xl md:text-3xl">
                  {project.title}
                </h1>
                <p className="hidden sm:block text-lg">{project.stack}</p>
                <div className="flex justify-center items-center gap-6 mt-2 text-lg sm:text-2xl">
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
    </section>
  );
};

export default Projects;
