import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLine } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

const SocialsBar = () => {
  return (
    <div className="flex-col bottom-[4%] right-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-20 px-4 py-2">
          <a href="https://github.com/angelacollings">
            <FiGithub
              size={25}
              className="flex text-yellow-700 hover:text-yellow-500 hover:scale-125 duration-200"
            />
          </a>
        </li>
        <li className="flex justify-between items-center w-20  px-4 py-4">
          <a href="https://www.linkedin.com/in/angelacollings">
            <FiLinkedin
              size={25}
              className="flex text-yellow-700 hover:text-yellow-500 hover:scale-125 duration-200"
            />
          </a>
        </li>
        <li className="flex justify-between items-center w-20 px-4 py-2">
          <a href="none">
            <HiOutlineMail
              size={25}
              className="flex text-yellow-700 hover:text-yellow-500 hover:scale-125 duration-200"
            />
          </a>
        </li>
        <li className="flex justify-between items-center px-2">
          <AiOutlineLine
            className="flex justify-between items-center text-yellow-700 rotate-90
            w-10
            h-10"
          />
        </li>
        <li className="flex justify-between items-center px-5">
          <SlOptionsVertical
            className="flex justify-between items-center text-yellow-700 
            w-4
            "
          />
        </li>
      </ul>
    </div>
  );
};

export default SocialsBar;
