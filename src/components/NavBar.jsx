import React, { useState } from "react";
import logo from "../assets/logo-yellow.png";
import logoLight from "../assets/logo-light-yellow.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);

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
    <div className="flex justify-between items-center w-full h-20 px-4 text-yellow-700 bg-black fixed">
      <div>
        <img
          onMouseOver={(e) =>
            (e.currentTarget.src = logoLight) &&
            (e.currentTarget.style.transition = "all 0.5s ease") &&
            (e.currentTarget.style.transform = "rotate(360deg)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.src = logo) &&
            (e.currentTarget.style.transform = "rotate(0deg)") &&
            (e.currentTarget.style.transition = "all 0.5s ease")
          }
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
            className="inline-block cursor-pointer px-4 py-2 text-xl font-semibold hover:text-yellow-500 hover:scale-125 duration-200"
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
          <FaTimes
            className="text-yellow-700 hover:text-yellow-500"
            size={30}
            alt="menu-exit"
            data-testid="menu-exit"
          />
        ) : (
          <FaBars
            className="text-yellow-700 hover:text-yellow-500"
            size={30}
            alt="menu-bars"
            data-testid="menu-bars"
          />
        )}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800"
          data-testid="small-menu"
        >
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="inline-block cursor-pointer px-4 py-6 text-4xl hover:text-pink-500 hover:scale-125 duration-200"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
