/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        "350px": "350px",
        "400px": "400px",
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
        bg: "url(../src/imgs/bg-avif.avif)",
      },
    },
  },
};
