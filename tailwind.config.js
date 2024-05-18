/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#D87D4A', 
        hoverOrange:'#fbaf85'
      },
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],daisyui: {
    themes: ["light"],
  },
}