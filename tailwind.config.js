module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rye: ["Rye", "cursive"],
        dance: ["Dancing Script", "cursive"],
        oswald: ["Oswald", "cursive"],
      },
      strokeWidth: {
        5: "5px",
      },
    },
  },
  plugins: [require("daisyui")],
};
