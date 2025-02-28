import React from "react";
import sankey from "../assets/sankey.png";
import pie from "../assets/pie.jpg";

const NextProject = () => {
  return (
    <section className="flex flex-col items-center min-h-[80vh] mx-12 max-w-screen-xl py-12 gap-8 sm:items-start sm:flex-row xl:mx-auto dark:text-white">
      <div className="w-1/2 sm:mb-0 mb-4 text-center sm:text-left min-w-[240px]">
        <h1 className="text-3xl font-bold mb-8">Budget Visualizer (BudBud)</h1>
        <p className="sm:leading-8 sm:text-xl">
          Thinking of what can be relatable to all people, managing finances is something that 
          is really important at all stages of life. Being able to visualize how your money is divided 
          can be very helpful and creating a budget can aid in future financial success. Finances doesn't need to be just 
          all numbers.  {" "}
          <span className="hidden md:inline">
            The idea is to have the user input their finances (manually or importing a csv file). They can create as many 
            categories as they want and split their desired budget up. After inputting the numbers and setting a budget,
            a pie chart / Sankey diagram will appear to show how the finances are divided and can give feedback based off of what is presented.
          </span>
        </p>
        <p className="sm:leading-8 font-semibold sm:text-lg">
          <br />
          Planned Tech Stack: React, Firebase Auth, visualization library
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <img
          src={sankey}
          alt="sankey"
          className="mb-4 min-w-[200px] rounded"
        />
        <img src={pie} alt="pie" className="min-w-[200px] rounded" />
      </div>
    </section>
  );
};

export default NextProject;
