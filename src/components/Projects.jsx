import React from "react";
import instagram from '../assets/instagram.png'
import pokemon from '../assets/pokemonapp.png'
import nft from '../assets/nftsite.png'

const Projects = () => {
  const projectData = [
    {
      id: "1",
      title: "Instagram Clone",
      stack: "React, Firebase, ChakraUI",
      thumbnail: instagram,
    },
    {
      id: "2",
      title: "Pokemon Web App",
      stack: "React, HTML/CSS",
      thumbnail: pokemon,
    },
    {
      id: "3",
      title: "NFT Marketplace",
      stack: "React, HTML/CSS",
      thumbnail: nft,
    },
  ];
  return (
    <section className="max-w-6xl flex flex-col items-center mx-auto gap-12 my-12 px-12">
      <h1 className="font-bold text-4xl text-center">My Projects</h1>
        <ul className="flex flex-col gap-8">
          {projectData.map((project) => (
            <li key={project.id}>
              <div className="text-center w-full flex items-center bg-gray-200 rounded">
                <div className="w-1/2">
                  <img className="rounded " src={project.thumbnail} alt="" />
                </div>
                <div className="w-1/2">
                  <h1 className="font-bold text-sm sm:text-lg md:text-3xl">{project.title}</h1>
                  <p className="hidden md:block text-lg">{project.stack}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </section>
  );
};

export default Projects;
