/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      vibes: ["Great Vibes", "cursive"],
    },
    extend: {
      colors: {
        primary: "#ED1D24",
        "primary-light": "#ff6b6b",
        secondary: "#50B848",
        "body-text": "#9295a3",
        "main-text": "#191b32",
        "header-light": "#9295a3",
      },
    },
  },
  plugins: [],
});
