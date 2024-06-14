module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "book-flight-cover":
          "url('/src/assets/Tickets/images/BookFlightCover.png')",
      },
      colors: {
        textDark: "#3C3F49",
        primaryBlue: "#3986ea",
        "custom-gray": "#616c81",
        borderGray: "#cfd8e1",
        lightBlue: "#f0f6fd",
        backgroundGray: "#f4f6f8",
        offerBlack: "#3c3f49",
        navBg: "#616C81",
        orangeBrown: "#88680a",
        longRed: "#ad3d47",
        bogOrange: "#ff7a39",
        tbcBlue: "#4ea0d8",
        credoRed: "#ea4b37",
        overlayGray: "#c9cbcf",
        boxGray: "#f4f6f8",
        boxOrange: "#FDF5E9",
        bedDark: "#788193",
        boxBlue: "#F0F6FD",
        insuranceGray: "#616C81",
        warningRed: "#E85D5D",
      },
      screens: {
        custom: "830px",
        xs: "425px",
      },
      animation: {
        rotate: "rotate360 0.5s forwards",
      },
      keyframes: {
        rotate360: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      fontFamily: {
        "noto-sans-georgian": ['"Noto Sans Georgian"', "sans-serif"],
      },
      fontSize: {
        smallText: "7px",
      },
      fontOpticalSizing: ["responsive"],
    },
  },
  plugins: [],
};
