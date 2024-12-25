/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F10102",
        default: "#612BD3",
        secondary: "#1A1919",
      },
    },
  },
  plugins: [],
}

