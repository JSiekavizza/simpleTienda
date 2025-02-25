import { FcAutomatic } from "react-icons/fc";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono", "serif"],
      },
      animation: {
        slide: "slide 10s linear",
        Infinity,
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "33%": { transform: "translateX(-100%)" },
          "66%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
