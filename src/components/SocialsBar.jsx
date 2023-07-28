import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLine } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

const SocialsBar = () => {
  const iconStyle =
    "flex text-yellow-700 hover:text-yellow-500 hover:scale-125 duration-200";
  const links = [
    {
      id: 1,
      child: (
        <>
          <FiGithub size={25} className={iconStyle} />
        </>
      ),
      href: "https://github.com/angelacollings",
      style: "w-20 px-4 py-2",
    },
    {
      id: 2,
      child: <FiLinkedin size={25} className={iconStyle} />,
      href: "https://www.linkedin.com/in/angelacollings",
      style: "w-20 px-4 py-2",
    },
    {
      id: 3,
      child: <HiOutlineMail size={25} className={iconStyle} />,
      href: "none",
      style: "w-20 px-4 py-2",
    },
    {
      id: 4,
      child: (
        <AiOutlineLine
          className="flex text-yellow-700 rotate-90
          w-10
          h-10"
        />
      ),
      href: "none",
      style: "px-2",
    },
    {
      id: 5,
      child: (
        <SlOptionsVertical
          className="flex text-yellow-700
          w-4
          "
        />
      ),
      href: "none",
      style: "px-5",
    },
  ];
  return (
    <div className="flex-col bottom-[4%] right-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center ${link.style}`}
          >
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialsBar;
