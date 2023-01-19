import React, { useState } from "react";
const Navbar = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex fixed z-10 top-0  h-32 py-8 px-0   justify-between container bg-body-color">
      <a href="/">
        <h1>Jitto</h1>
      </a>
      <ul className="flex justify-around items-center w-96 font-medium  duration-300">
        <li className=" cursor-pointer  text-title-color hover:text-title-color-dark">
          Home
        </li>
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          About
        </li>
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          Skills
        </li>
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          Projects
        </li>
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
