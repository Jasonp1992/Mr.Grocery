/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "header-image":
          "linear-gradient(0deg, rgba(9,121,83,1) 0%, rgba(0,255,118,0.11584230132450335) 89%), url('/public/img/grocery-cover.jpg')",
      },
      colors: {
        "slick-gray": "#1E1F23",
        "pretty-blue": "#29ABC8",
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
