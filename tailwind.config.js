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
        qlesa: "#535353",
        "custom-gray": "#616c81",
        borderGray: "#cfd8e1",
        lightBlue: "#f0f6fd",
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
    },
  },
  plugins: [],
};
