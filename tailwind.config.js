module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-button-color": "#E7817E",

        "background-light": "#F7F5FE",

        "primary-color": "#D7E6C4",
        "secondary-color": "#E6C4E0",

        "primary-text-color": "#0D0D46",
        "secondary-text-color": "#2C2BA0",
      },
      borderRadius: {
        "primary-radius": "40px",
        "secondary-radius": "32px",
      }
    },
  },
  plugins: [],
}
