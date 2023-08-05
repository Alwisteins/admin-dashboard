/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      palette: {
        bg: "#f8f9fa",
        white: "#fff",
        gray: '#808080',
        down: "#FF1700",
        up: "#06FF00",
        100: "#4B49AC",
        200: "#eef2ff",
        300: "#7DA0FA",
        400: "#7978E9",
        500: "#F3797E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
