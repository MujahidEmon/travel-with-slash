/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat : '"Montserrat", serif',
        bebas: '"Bebas Neue", serif'
      },
      backgroundImage: {
        main: "url('/public/images/Rectangle 1.png')"
      }
    },
  },
  plugins: [require('daisyui'),],
}

