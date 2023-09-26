/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./**/*.html"],
  theme: {
    extend: {
      screens: {
        "350px": "350px",
        "450px": "450px",
        "700px": "700px",
        "900px": "900px",
      },

      backgroundColor: {
        "custom-blue": "#5B53FF",
        "custom-red": "#A82F1F",
      },

      backgroundImage: {
        logo: "url(../src/imgs/dollar-avif.avif)",
      },
    },
  },
  plugins: [],
};
