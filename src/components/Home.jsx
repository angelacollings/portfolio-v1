import React from "react";
import HeroImage from "../assets/photo.png";
import { SlArrowRight } from "react-icons/sl";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to bg-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-w-lg">
          <p className="text-gray-400">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-yellow-700 py-3">
            Angela Collings.
          </h1>
          <p className="text-2xl sm:text-4xl font-bold text-gray-400">
            I'm a Software Developer.
          </p>
          <p className=" text-gray-400 text-lg py-8 ">
            I have a passion for problem solving and creating things. Currently
            I am enjoying learning how to navigate Wordpress and working on a
            few personal projects to expand my skill-set in React and Node.js.
          </p>
          <div>
            <button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-700 to-yellow-500 cursor-pointer hover:scale-105 duration-200">
              View Projects
              <span className="group-hover:rotate-[450deg] duration-500 ml-4">
                <SlArrowRight size={15} data-testid="arrow-right" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="hero" className="mx-auto w-2/3 md:2/3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
