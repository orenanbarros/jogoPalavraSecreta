/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeout: {
          '100%': { opacity: 0},
          '0%': { opacity: 1 }
        }
      },
      animation: {
        fadeout: 'fadeout 5s',
      }
    },
  },
  plugins: [],
}

