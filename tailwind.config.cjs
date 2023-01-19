/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      "title-color": "	#333333",
      "title-color-dark": "	#000000",
      "text-color": "#757575",
      "body-color": "#fafafa",
      "container-color": "#fff",
      "icon-color": "#6462df",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      base: "10rem",
      "h1-font": "2.25rem",
      "big-font": "3.5rem",
      "small-font-size": "0.875rem",
      "medium-size": "1.25rem",
    },
    extend: {
      boxShadow: {
        sm: "0 1px 0px 0 rgb(0 0 0 / 0.05)",
        "about-box": "inset 0 0 0 9px rgb(255 255 255/30%)",
      },
      animation: {
        profile: "example 8s ease-in-out infinite 1s",
        wheel: "scroll 2s ease infinite",
      },
      keyframes: {
        example: {
          // "0%, 100%": { transform: "rotate(-3deg)" },
          // "50%": { transform: "rotate(3deg)" },
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        scroll: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(3.75rem)",
          },
        },
      },
    },
    screens: {
      large: { max: "992px" },
      medium: { max: "768px" },
      mediumSmall: { max: "576px" },
      small: { max: "350px" },
    },
  },
  plugins: [],
};
