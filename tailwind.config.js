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
        primaryBlue: "#1A73E7",
        qlesa: "#535353",
        "custom-gray": "#616c81",
      },
      screens: {
        custom: "830px",
      },
    },
  },
  plugins: [],
};
