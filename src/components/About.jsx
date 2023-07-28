import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-gray-900 to bg-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full p-4">
        <div className="pb-8">
          <p className="text-gray-400 text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-lg sm:text-xl font-bold text-gray-400">
          Software Developer | Problem Solver | Passionate Learner
        </p>
        <p className=" text-gray-400 text-lg py-8 ">
          I have a passion for problem solving and creating things. Currently I
          am enjoying learning how to navigate Wordpress and working on a few
          personal projects to expand my skill-set in React and Node.js.
        </p>
      </div>
    </div>
  );
};

export default About;
