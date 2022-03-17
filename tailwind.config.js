module.exports = {
  content: ["./src/index.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1024px",
      "2xl": "1024px",
    },
  },
  daisyui: {
    themes: ["garden"],
  },
  plugins: [require("daisyui")],
};
