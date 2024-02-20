/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}", "./index.html"],
  theme: {
    extend: {
        fontFamily: {
          epilogue: ['Epilogue', 'sans-serif'],
        },
        boxShadow: {
          secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
        },
    },
    plugins: [],
  },
}
