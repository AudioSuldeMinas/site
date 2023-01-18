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
        dark1:'3px 3px 3px gray',
      }
},
  },
  plugins: [],
}
