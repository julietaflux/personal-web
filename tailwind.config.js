module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "playlist-small": "80px",
        "playlist-medium": "300px",
        "playlist-large": "480px",
      },
      width: {
        "playlist-medium": "300px",
        "playlist-large": "480px",
        "art-small": "200px",
        "art-medium": "300px",
        "art-large": "480px",
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
