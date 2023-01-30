import React from "react";

const Card = ({ card }) => {
  return (
    <div className=" text-center w-full mt-2">
      <h2 className="text-icon-color">{card.project}</h2>
      <img
        src={card.image}
        alt={card.project}
        className="rounded-md  mt-4 shadow-xl cursor-pointer w-11/12 h-11/12"
      />
      <div className="flex justify-center items-center min-h-1/4 mt-2">
        <p className="text-title-color">{card.about}</p>
      </div>
      <div>
        <a href={card.github} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={36}
            height={36}
            viewBox="0 0 24 24"
            className="fill-title-color hover:fill-title-color-dark"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            />
          </svg>
        </a>
        {card.live ? (
          <a href={card.live} target="_blank" className="ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 24 24"
              className="fill-title-color hover:fill-title-color-dark"
            >
              <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z" />
              <circle cx="15.73" cy="8.3" r={2} />
              <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z" />
            </svg>
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="mb-10 mt-2">
        {card.tags.map((tag) => {
          return <span className="button-tag mr-1">{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default Card;
