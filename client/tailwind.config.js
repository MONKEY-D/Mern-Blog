import flowbite from "flowbite/plugin";
import tailwindScrollbar from "tailwind-scrollbar";
// import tailwindLineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include your project files
    "./public/index.html",             // Include the main HTML file
    "./node_modules/flowbite/**/*.js", // Include Flowbite library files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
    tailwindScrollbar,
    // tailwindLineClamp,
  ],
};
