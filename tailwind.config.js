/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "autofill-bg": "#1f2937", // same as bg-gray-800
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
