/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    screens: {
      sLaptops: { max: `84em` },
      landscapeTablets: { max: `75em` },
      tablets: { max: `59em` },
      smallerTablets: { max: `44em` },
      phones: { max: `34em` },
    },
    fontFamily: {
      rubik: ["Rubik", "serif"],
    },
    colors: {
      primary: "#e67e22",
      textGrey555: "#555",
      textGrey333: "#333",
    },
    extend: {
      fontSize: {
        body: `100%`,
        bodyLandscapeTablet: `90%`,
        bodyTablet: `80%`,
      },
      backgroundImage: {
        CTAImage:
          "linear-gradient(to right bottom, rgba(235,151,78,0.35), rgba(230,125,34,0.35)), url(content/img/eating.jpg)",
      },
      boxShadow: {
        inset3pxWhite: "inset 0 0 0 3px #fff",
        cardShadow: "0 1.5rem 3rem rgba(0, 0, 0, 0.12)",
        cardShadowHover: "0 2rem 4rem rgba(0, 0, 0, 0.09)",
        CTAShadow: "0 2rem 4rem rgba(0, 0, 0, 0.2)",
        inputFieldShadow: "0 1rem 2rem rgba(0, 0, 0, 0.1)",
        focusShadow: "0 0 0 8px rgba(230, 125, 34, 0.5)",
        formFocusShadow: "0 0 0 8px rgba(253, 242, 233, 0.5)",
      },
    },
  },
  plugins: [],
};
