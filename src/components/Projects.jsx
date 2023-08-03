import React from "react";
import placeHolder from "../assets/placeholder.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-900 w-full text-gray-400 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full p-10">
        <div className="pb-8">
          <p className="text-yellow-700 text-4xl font-bold inline border-b-4 border-yellow-700">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-yellow-600 rounded-lg">
            <img
              src={placeHolder}
              alt="placeholder"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div>{/* <p>Project Name</p> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
