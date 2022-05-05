module.exports = {
  // content: ["./simpleSite/**/index.html"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
