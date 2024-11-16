import React from "react";

const TechStack = () => {
  return (
    <section
      id="stack"
      className="max-w-6xl flex flex-col items-center mx-auto gap-12 my-36 px-12 dark:text-white"
    >
      <h1 className="font-bold text-4xl text-center">
        Technical Toolkit
      </h1>
      <div className="grid grid-cols-4 gap-16 place-items-center">
        <figure className="flex flex-col items-center gap-4">
          <img
            className="sm:h-[150px] sm:w-[150px] h-16 min-w-16 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
            alt="html"
          />
          <span className="sm:text-xl text-md">HTML</span>
        </figure>
        <figure className="flex flex-col items-center gap-4">
          <img
            className="sm:h-[150px] sm:w-[150px] h-16 min-w-16 object-contain"
            src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
            alt="css"
          />
          <span className="sm:text-xl text-md">CSS</span>
        </figure>
        <figure className="flex flex-col items-center gap-4">
          <img
            className="sm:h-[150px] sm:w-[150px] h-16 min-w-16 object-contain"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
            alt="javascript"
          />
          <span className="sm:text-xl text-md">JavaScript</span>
        </figure>
        <figure className="flex flex-col items-center gap-4">
          <img
            className="sm:h-[150px] sm:w-[150px] h-16 min-w-16 object-contain"
            src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
            alt="react"
          />
          <span className="sm:text-xl text-md">React</span>
        </figure>
        <figure className="flex flex-col items-center gap-4">
          <img
            className="sm:h-[150px] sm:w-[150px] h-16 min-w-16 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png"
            alt="node"
          />
          <span className="sm:text-xl text-md">Node.js</span>
        </figure>
        <figure className="flex flex-col items-center gap-4">
          <img
            className="sm:h-[150px] sm:w-[150px] h-16 min-w-16 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png"
            alt="python"
          />
          <span className="sm:text-xl text-md">Python</span>
        </figure>
        <figure className="flex flex-col items-center gap-4">
          <img
            className="sm:h-[150px] sm:w-[150px] h-16 min-w-16 object-contain"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png"
            alt="java"
          />
          <span className="sm:text-xl text-md">Java</span>
        </figure>
        <figure className="flex flex-col items-center gap-4">
          <img
            className="sm:h-[150px] sm:w-[150px] h-16 min-w-16 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/220px-Postgresql_elephant.svg.png"
            alt="sql"
          />
          <span className="sm:text-xl text-md">PostgreSQL</span>
        </figure>
      </div>
    </section>
  );
};

export default TechStack;
