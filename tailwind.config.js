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
      },
    },
  },
  plugins: [],
};
