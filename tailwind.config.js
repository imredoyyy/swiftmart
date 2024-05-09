/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          50: "#FF6F00",
          100: "#070a13",
          200: "#F5F5F5",
          300: "#F7F7F7",
        },
      },
      transitionDuration: {
        400: "400ms",
        800: "800ms",
      },
      boxShadow: {
        "shadow-mobile-nav": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      minHeight: {
        "hero-height": "calc(100vh - 72px)",
      },
      gridTemplateColumns: {
        cart: "1fr 320px",
      },
      backgroundImage: {
        "pagination-bg": "url('./assets/pagination-bg.jpg')",
      },
    },
  },
  plugins: [],
};
