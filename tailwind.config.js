/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    dropShadow: {
        dark: '1px 1px 1px gray',
        dark1:'1px 1px 1px black',
        dark2:'1px 1px 1px black',
      }
},
  },
  plugins: [],
}
