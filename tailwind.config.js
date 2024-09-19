/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightCyan: "#01c8c8",
        brightOrange: "#ff9527",
      },
    },
  },
  plugins: [],
};
