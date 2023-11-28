/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        tagColor: "rgba(255, 255, 255, 0.80)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
