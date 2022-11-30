/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightcolor: "burlywood",
        d: "blue"
      }
    },
    fontFamily: {
      mainfont: ["Nerko One", "cursive"]
    }
  },
  plugins: [],
}
