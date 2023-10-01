/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/rm218-bb-07.jpg')",
        'footer-texture': "url('./src/assets/rm218-bb-07.jpg')",
      },
      fontFamily: {
          "Pacifico": ['Pacifico', 'cursive']
      }
  },
  },
  plugins: [require("daisyui")],
}

