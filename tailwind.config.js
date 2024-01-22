/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      },
      colors: {
        "black": "#000",
        "white": "#FFF",
        "light-gray": "#888",
        "light-green": "#D7F5DC",
        "green": "#20B15A",
        "dark-green": "#00CA72",
        "orange": "#F55F1D"
      }
    },
  },
  plugins: [],
}

