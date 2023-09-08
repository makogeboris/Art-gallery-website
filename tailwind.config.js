/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./location.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      cursive: ["Big Shoulders Display", "cursive"],
      sans: ["Outfit", "sans-serif"],
    },
    colors: {
      "moderate-brown": "#D5966C",
      "dark-black": "#151515",
      "moderate-gray": "#444444",
    },
    extend: {},
  },
  plugins: [],
};
