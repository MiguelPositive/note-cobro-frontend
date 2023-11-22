/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      screens: {
        "350px": "350px",
        "370px": "370px",
        "400px": "400px",
        "450px": "450px",
        "700px": "700px",
        "900px": "900px",
      },

      backgroundColor: {
        "custom-blue": "#5B53FF",
        "custom-red": "#A82F1F",
        "custom-organge": "#EC681D",
      },

      backgroundImage: {
        logo: "url(../src/imgs/dollar-avif.avif)",
        bg: "url(../src/imgs/bg-avif.avif)",
      },

      boxShadow: {
        "custom-shadow": "5px 5px 5px 5px black/50",
      },
    },
  },
};
