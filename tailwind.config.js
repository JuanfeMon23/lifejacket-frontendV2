// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ] , 
  theme: {
    AzulButton : '#2D78BE' ,
    PurpleButton : '#6D2CC0' ,
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}
