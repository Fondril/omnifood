/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "serif"],
    },
    colors: {
      primary: "#e67e22",
      textGrey555: "#555",
      textGrey333: "#333",
    },
    extend: {
      boxShadow: {
        inset3pxWhite: "inset 0 0 0 3px #fff",
        cardShadow: "0 1.5rem 3rem rgba(0, 0, 0, 0.12)",
        cardShadowHover: "0 2rem 4rem rgba(0, 0, 0, 0.09)",
      },
    },
  },
  plugins: [],
};
