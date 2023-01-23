import React from "react";

const ScrollDown = () => {
  return (
    <div className="ml-44 large:ml-40">
      <a href="#about" className="h-100 flex gap-2">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="animate-wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: 20,
            }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: 20,
            }}
          />
        </svg>
        <span className="flex items-center text-medium-size font-medium text-title-color gap-1">
          Scroll Down{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={"24"}
            height={"24"}
          >
            <path
              fill="var(--title-color)"
              d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
