module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "playlist-small": "80px",
        "playlist-medium": "230px",
      },
      width: {
        "playlist-medium": "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
