/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        'phone': { 'raw' : '(min-width: 423px)'},
        'h900' : { 'raw' : '(min-height: 900px)' },
      },
    },
    
  },
  plugins: [],
}

