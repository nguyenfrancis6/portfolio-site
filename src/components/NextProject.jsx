import React from "react";
import spotify1 from "../assets/spotify.png";
import spotify2 from "../assets/spotify2.png";

const NextProject = () => {
  return (
    <section className="flex flex-col items-center min-h-[80vh] mx-12 max-w-screen-xl py-12 gap-8 sm:items-start sm:flex-row xl:mx-auto dark:text-white">
      <div className="w-1/2 sm:mb-0 mb-4 text-center sm:text-left min-w-[240px]">
        <h1 className="text-3xl font-bold mb-8">Full-Stack Spotify Clone 🎵</h1>
        <p className="sm:leading-8 sm:text-xl">
          In my daily activities, I always listen to music through Spotify.
          Being one of my most used web applications, I have an interest in
          challenging myself to recreate the Spotify Web Player and also delve
          into full-stack development. {" "}
          <span className="hidden sm:inline">
            I have ideas of having my own twist to this application such as
            picking a random song to play, having some Spotify trivia, or adding
            friends on the platform. This will be impactful for my growth and
            another stepping stone in my journey as a software developer.
          </span>
        </p>
        <p className="sm:leading-8 font-semibold sm:text-lg">
          <br />
          Planned Tech Stack: React, Tailwind, Node, Express, AWS, SQL Database
          (MySQL or PostgreSQL)
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <img src={spotify1} alt="spotify1" className="mb-4 min-w-[200px] rounded" />
        <img src={spotify2} alt="spotify2" className="min-w-[200px] rounded" />
      </div>
    </section>
  );
};

export default NextProject;
