import React from "react";
import Card from "./Card";
import projectShoppi from "../assets/shoppi.png";

const Projects = () => {
  const cards = [
    {
      project: "Shoppi",
      image: projectShoppi,
      about: "Shopping cart made with fake data from faker.js",
      github: "https://github.com/Jittojoyes98/Shoppi",
      live: "https://shoppi-app.netlify.app/",
      tags: ["Netlify", "Fakerjs", "Context Api", "useReducer"],
    },
    {
      project: "Talk-Talk",
      image: projectShoppi,
      about:
        "A MERN stack application that helps CRUD operations for chats, which provides realtime-messaging and notification with the help of socket.io.",
      github: "https://github.com/Jittojoyes98/Talk-Talk",
      tags: ["MERN", "Socket.io", "Chakra UI", "CRUD"],
    },
  ];
  return (
    <div className="section" id="projects">
      <div className="flex justify-center flex-col gap-10">
        <div>
          <h1 className="text-center">Projects</h1>
          <p className="text-center">What i have built</p>
        </div>
        <div className="grid grid-cols-projects gap-x-2 grid-rows-projects">
          {cards.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
