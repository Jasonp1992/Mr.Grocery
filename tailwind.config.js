/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "search-image":
          "linear-gradient(183deg, rgba(166,166,166,0.8057598039215687) 100%, rgba(166,166,166,1) 100%), url('/img/blackberries.jpg')",
      },
      colors: {
        "slick-gray": "#1E1F23",
        "pretty-blue": "#29ABC8",
        "off-blue": "#D8FFFD",
      },
      spacing: {
        701: "700px",
        500: "500px",
        550: "550px",
      },
      maxWidth: {
        300: "300px",
        400: "400px",
        560: "360px",
      },
      minWidth: {
        400: "400px",
      },
      fontFamily: {
        "indie-flower": ["Indie Flower"],
        "josefin-sans": ["Josefin Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
