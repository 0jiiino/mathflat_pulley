/** @type {import('tailwindcss').Config} */

import theme from "./src/styles/theme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: { min: "1024px", max: "1279px" },
      pc: "1280px",
    },
    colors: {
      ...theme.colors,
    },
  },
  plugins: [],
};
