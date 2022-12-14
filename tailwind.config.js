/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa' : ['"comfortaa"', 'cursive'],
        'inter' : ['Inter"', 'sans-serif'],

      }
    },
  },
  plugins: [],
}
