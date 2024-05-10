/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffff",
      MarineBlue: "hsl(213, 96%, 18%)",
      zink: "rgb(163, 163, 163)",
      errorMsg: "rgb(157, 38, 29)",
    },
  },
  plugins: [],
};
