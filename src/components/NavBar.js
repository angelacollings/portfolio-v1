import React, { useState } from "react";
import logo from "../assets/logo-light-green.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-emerald-500 bg-black fixed">
      <div>
        <img
          onClick={() => window.location.replace("/")}
          className="w-14  cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>

      <ul className="hidden md:flex">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="inline-block cursor-pointer px-4 py-2 text-xl font-semibold hover:text-emerald-400 hover:scale-125 duration-200"
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-3 z-10"
      >
        {nav ? (
          <FaTimes className="text-emerald-500" size={30} />
        ) : (
          <FaBars className="text-emerald-500" size={30} />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="inline-block cursor-pointer px-4 py-6 text-4xl hover:text-emerald-400 hover:scale-125 duration-200"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
