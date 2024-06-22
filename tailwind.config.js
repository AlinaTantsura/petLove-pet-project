/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "opacity-black": "rgba(38, 38, 38, 0.5)",
        "orange-main": "#F6B83D"
      }
    },
  },
  plugins: [],
}

