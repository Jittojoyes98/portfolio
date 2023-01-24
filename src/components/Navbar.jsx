import React, { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="flex fixed z-10 top-0  h-32 py-8 px-0   justify-between container bg-body-color large:top-auto large:bottom-0
    large:py-1 large:h-16 large:rounded-t-lg  large:left-0  large:ml-0"
    >
      <a onClick={() => scrollTo(0, 0)} className="mt-0.5 cursor-pointer">
        <h1 className={`${toggle ? "large:hidden" : "block"}`}>Jitto</h1>
      </a>
      <ul
        className={`flex justify-around items-center gap-8 w-96 font-medium  duration-300 ${
          toggle ? "large:gap-16" : "large:hidden"
        }`}
      >
        <li className=" cursor-pointer  text-title-color hover:text-title-color-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={"24"}
            height={"24"}
            className="  fill-title-color hover:fill-title-color-dark hidden large:block m-auto"
          >
            <path
              // fill="var(--title-color)"
              d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
            />
          </svg>
          <span className="inline-block">Home</span>
        </li>
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={"24"}
            height={"24"}
            className="fill-title-color hover:fill-title-color-dark hidden large:block m-auto"
          >
            <path
              // fill="var(--title-color)"
              d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
            />
          </svg>
          <span className="inline-block" href="#about">
            About
          </span>
        </li>
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={"24"}
            height={"24"}
            className="fill-title-color hover:fill-title-color-dark hidden large:block m-auto"
          >
            <path
              // fill="var(--title-color)"
              d="M20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H14ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V9a1,1,0,0,0,1,1h5Z"
            />
          </svg>
          <span className="inline-block">Skills</span>
        </li>

        {/* new thing */}
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={"24"}
            height={"24"}
            className="fill-title-color hover:fill-title-color-dark hidden large:block m-auto"
          >
            <path
              // fill="var(--title-color)"
              d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
            />
          </svg>
          <span className="inline-block">Journey</span>
        </li>
        {/* new thing */}
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={"24"}
            height={"24"}
            className="fill-title-color hover:fill-title-color-dark hidden large:block m-auto"
          >
            <path
              // fill="var(--title-color)"
              d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.27,21.27,0,0,0,3,.94v.59a1,1,0,0,0,2,0v-.21a23,23,0,0,0,3,.21,23,23,0,0,0,3-.21v.21a1,1,0,0,0,2,0v-.59A21.27,21.27,0,0,0,20,13Zm0-7.69a20.39,20.39,0,0,1-3,1V11.5a1,1,0,0,0-2,0v.74a20.11,20.11,0,0,1-6,0V11.5a1,1,0,0,0-2,0v.33a20.39,20.39,0,0,1-3-1V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
            />
          </svg>
          <span className="inline-block">Projects</span>
        </li>
        <li className=" cursor-pointer text-title-color hover:text-title-color-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={"24"}
            height={"24"}
            className="fill-title-color hover:fill-title-color-dark hidden large:block m-auto"
          >
            <path
              // fill="var(--title-color)"
              d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
            />
          </svg>
          <span className="inline-block">Contact</span>
        </li>
      </ul>

      <div className="hidden large:mr-10 large:block m-auto ml-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={"24"}
          height={"24"}
          onClick={() => setToggle(!toggle)}
          className={`${toggle ? "hidden" : "block"} cursor-pointer`}
        >
          <path
            fill="var(--title-color)"
            d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={"24"}
          height={"24"}
          onClick={() => setToggle(!toggle)}
          className={`${toggle ? "block" : "hidden"} cursor-pointer`}
        >
          <path
            fill="var(--title-color)"
            d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
