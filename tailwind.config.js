/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightCyan: "#01c8c8",
        brightOrange: "#ff9527",
        customPpurple: "rgb(119, 0, 255)",
        customGreen: "rgb(48, 81, 70)",
      },
      scale: {
        "custom-x": "1",
        "custom-y": ".866",
        "custom-rotate-x": ".707",
        "custom-rotate-y": "1.414",
      },
      skew: {
        "-30": "-30deg",
        "-45": "-45deg",
      },
      rotate: {
        "-135": "-135deg",
        135: "135deg",
      },
      width: {
        15: "60px",
        11: "45px",
      },
      margin: {
        "-5": "-20px",
      },
    },
  },
  plugins: [],
};
