import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center p-2 h-40">
      <p className="flex items-center tracking-wide text-meduim-small-font-size">
        Made with{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height={24}
          width={24}
          className="ml-1 mr-1"
        >
          <path
            fill="var(--icon-color)"
            d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"
          />
        </svg>{" "}
        Using{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-icon-color mr-1 ml-1"
        >
          Tailwind CSS{"  "}
        </a>
        {"  "}
        and{"  "}
        <a
          href="https://vitejs.dev/"
          target="_blank"
          className="text-icon-color ml-1"
        >
          Vite{" "}
        </a>
      </p>
    </div>
  );
};

export default Footer;
