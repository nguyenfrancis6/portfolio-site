import ca from "../assets/california-seismic.png";
import csp from '../assets/csp.png'

const Experience = () => {
  const experienceData = [
    {
      id: "1",
      jobTitle: "Junior Software Engineer",
      company: "California Seed and Plant Lab",
      duration: "June 2025 - Present",
      image: csp,
      imageAlt: "California Seed and Plant Lab",
    },
    {
      id: "2",
      jobTitle: "Frontend Developer Intern",
      company: "California Seismic",
      duration: "June 2024 - August 2024",
      image: ca,
      imageAlt: "California Seismic",
    },
  ];

  return (
    <section
      id="exp"
      className="max-w-6xl flex flex-col items-center mx-auto gap-12 my-36 px-12 dark:text-white"
    >
      <h1 className="font-bold text-4xl text-center dark:text-white">
        Experience
      </h1>
      {experienceData.map((experience) => (
        <div key={experience.id} className="flex md:flex-row flex-col sm:text-left text-center w-3/5 items-center justify-between md:gap-16">
          <div>
            <h2 className="font-bold text-2xl">{experience.jobTitle}</h2>
            <p className="text-xl italic">{experience.company}</p>
            <p className="text-lg mb-4">{experience.duration}</p>
          </div>
          <div>
            <img
              className="md:block object-contain w-40 h-40"
              src={experience.image}
              alt={experience.imageAlt}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
