/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        xs: "480px",
        sm: "768px",
        md: "1024",
        lg: "1150px",
        xlg: "1200px",
        xl: "1280px"
      }
    },
  },
  plugins: [],
}

