/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: { min: "1024px", max: "1279px" },
      pc: "1280px",
    },
  },
  plugins: [],
};
