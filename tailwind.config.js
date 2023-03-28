/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgblur: 'url(/bg.jpg)',
        bgMobile:'url(/bgMobile.jpg)',
      },
        colors: {
          'tema-site': '#52658B',
          'second-tema-site': '#889FAC',
          'branco': '#FDFDFD',

        },
    dropShadow: {
        dark: '1px 1px 1px gray',
        dark1:'1px 1px 1px black',
        branco1:'1px 1px 1px white',
      },
      borderRadius: {
        'large': '50px',
      }
},
  },
  plugins: [],
}
