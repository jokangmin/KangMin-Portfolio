/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPalette: {
          100: '#CCD5AE',
          200: '#E9EDC9',
          300: '#FEFAE0',
          400: '#FAEDCD',
          500: '#D4A373'
        }
      }
    },
  },
  plugins: [],
}