import React from "react";
import ca from '../assets/california-seismic.png'

const Experience = () => {
  return (
    <section id="exp" className="max-w-6xl flex flex-col items-center mx-auto gap-12 my-36 px-12 dark:text-white">
      <h1 className="font-bold text-4xl text-center dark:text-white">
        Experience
      </h1>
      <div className="flex md:flex-row flex-col sm:text-left text-center w-full items-center justify-between gap-8">
        <div>
          <h2 className="font-bold text-2xl">Frontend Developer Intern</h2>
          <p className="text-xl italic">California Seismic</p>
          <p className="text-lg mb-4">June 2024 - July 2024</p>
          <p className="w-full leading-8">
          • Created the ASCE7 feature, displaying sections of the structural
            design engineering code for civil engineers to study from <br /><br />
            •  Designed and developed wireframes in Figma, translating them into UI
            components with React and Tailwind CSS <br /><br />
            •  Wrote unit tests for the ASCE7 feature using Jest, increasing test
            coverage and stability of the codebase <br /><br />
            •  Collaborated with an Agile development team of 5 in weekly sprints,
            completing Trello tickets for bug fixes and updates to ensure timely
            delivery of tasks <br /><br />
            • Conducted thorough code reviews for components ready for production,
            adhering to best software development practices
          </p>
        </div>
        <div className="w-full h-full">
          <img className="md:block hidden object-cover min-h-full min-w-full" src={ca} alt="California Seismic" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
