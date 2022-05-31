module.exports = {
  // content: ["./simpleSite/**/index.html"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1fb6ff",
        "custom-dark-blue": "#11243e",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#11243e",
      secondary: "#1fb6ff",
      danger: "#e3342f",
    }),
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
