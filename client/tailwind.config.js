// import flowbite from "flowbite-react/tailwind";
// import tailwindScrollbar from "tailwind-scrollbar";
// import tailwindLineClamp from "@tailwindcss/line-clamp";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js,jsx,ts,tsx}", ...flowbite.content()],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     flowbite.plugin(),
//     tailwindScrollbar,
//     tailwindLineClamp,
//   ],
// };


export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
};