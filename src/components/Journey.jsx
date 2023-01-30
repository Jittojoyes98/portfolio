import React, { useState } from "react";

const Journey = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="section" id="#journey">
      <div className="flex justify-center flex-col gap-10">
        <div>
          <h1 className="text-center">Journey</h1>
          <p className="text-center">My Personal journey</p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div
            className="flex justify-center items-center gap-2 cursor-pointer"
            onClick={() => setIndex(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill={`${
                index === 0 ? "var(--title-color-dark)" : "var(--title-color)"
              }`}
              className="text-svg-size"
            >
              <path d="M2 7v1l11 4 9-4V7L11 4z" />
              <path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z" />
            </svg>
            <span
              className={`${
                index === 0 ? "text-title-color-dark" : "text-title-color"
              } font-medium text-medium-size`}
            >
              Education
            </span>
          </div>
          <div
            className="flex justify-center items-center gap-2 cursor-pointer"
            onClick={() => setIndex(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill={`${
                index === 1 ? "var(--title-color-dark)" : "var(--title-color)"
              }`}
            >
              <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z" />
            </svg>
            <span
              className={`${
                index === 1 ? "text-title-color-dark" : "text-title-color"
              } font-medium text-medium-size`}
            >
              Experience
            </span>
          </div>
        </div>
        {/* experience */}
        <div
          className={`${
            index === 1
              ? "grid grid-cols-layout  max-w-3xl m-auto w-1/2"
              : "hidden"
          } `}
        >
          <div className="flex justify-between">
            <div>
              <h3>Front-end Intern</h3>
              <span>Xena Intelligence</span>
              <div className="flex gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-title-color hover:fill-title-color-dark"
                >
                  <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
                  <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" />
                </svg>
                <span className="text-title-color-dark">
                  Dec 2021 - Jan 2022
                </span>
              </div>
            </div>
            <div className="translate-x-1.5">
              {/* round */}
              <span className=" inline-block w-3 h-3 bg-icon-color rounded-full"></span>
              {/* line */}
              <span className="block w-px h-full bg-text-color line"></span>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>

          <div className="flex justify-between">
            <div className="-translate-x-1.5">
              {/* round */}
              <span className=" inline-block w-3 h-3 bg-icon-color rounded-full"></span>
              {/* line */}
              <span className="block w-px h-full bg-text-color line"></span>
            </div>
            <div>
              <h3>Software Developer</h3>
              <span>Qburst</span>
              <div className="flex gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-title-color hover:fill-title-color-dark"
                >
                  <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
                  <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" />
                </svg>
                <span className="text-title-color-dark">
                  Jul 2022- Jan 2023{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* education data */}

        <div
          className={`${
            index === 0
              ? "grid grid-cols-layout  max-w-3xl m-auto w-1/2"
              : "hidden"
          } `}
        >
          <div className="flex justify-between">
            <div>
              <h3>Higher Secondary</h3>
              <span>St:Mary's Public school</span>
              <div className="flex gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-title-color hover:fill-title-color-dark"
                >
                  <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
                  <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" />
                </svg>
                <span className="text-title-color-dark">2015-17</span>
              </div>
            </div>
            <div className="translate-x-1.5">
              {/* round */}
              <span className=" inline-block w-3 h-3 bg-icon-color rounded-full"></span>
              {/* line */}
              <span className="block w-px h-full bg-text-color line"></span>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>

          <div className="flex justify-between">
            <div className="-translate-x-1.5">
              {/* round */}
              <span className=" inline-block w-3 h-3 bg-icon-color rounded-full"></span>
              {/* line */}
              <span className="block w-px h-full bg-text-color line"></span>
            </div>
            <div>
              <h3>B-Tech</h3>
              <span>Cochin University</span>
              <div className="flex gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-title-color hover:fill-title-color-dark"
                >
                  <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
                  <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" />
                </svg>
                <span className="text-title-color-dark">2018-22</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
