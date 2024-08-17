/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", 'sans - serif'],
      },
      colors: {
        darkGray: '#181818',
        lightGray: '#F2F2F2',
        skyBlue: '#2F80ED',
        warningBgColor:'#FCEFCA'
      }
    },
  },
  plugins: [],
}

