/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        40: "40rem",
      },
      inset: {
        15: "15vh",
      },
    },
  },
  plugins: [],
};
