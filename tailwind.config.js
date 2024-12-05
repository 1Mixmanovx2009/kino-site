import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      backgroundImage: {
        "hero": "url(assets/images/bg-hero.png)",
        "hero1": "url(assets/images/bg-hero-1.jpg)",
        "hero2": "url(assets/images/bg-hero-2.webp)",
        "hero3": "url(assets/images/bg-hero-3.avif)"
      },
      colors: {
        redText: "#C61F1F",
        bgBtn: "#FFFFFF",
        greyText: "#A1A1A1",
        whiteText: "#FFFFFF",
      },
    },
  },
  plugins: [],
};