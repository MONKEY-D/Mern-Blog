import flowbite from "flowbite/plugin";
import tailwindScrollbar from "tailwind-scrollbar";
import tailwindLineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    tailwindScrollbar,
    tailwindLineClamp,
  ],
};
