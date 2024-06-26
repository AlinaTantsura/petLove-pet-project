/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-main": "#262626",
        "orange-main": "#F6B83D",
        "opacity-black": "rgba(38, 38, 38, 0.5)",
        "border-black": "rgba(38, 38, 38, 0.15)",
        "border-white": "rgba(255, 255, 255, 0.4)",
        "error-color": "#ef2447"
      }
    },
  },
  plugins: [],
}

