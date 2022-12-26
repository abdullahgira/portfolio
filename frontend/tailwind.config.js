module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./layouts/**/*.js",
    "./lib/**/*.js",
    "./data/**/*.mdx",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      md: "568px",
      lg: "1024px",
      // xl: '1145px',
    },
    extend: {
      zIndex: {
        "-1": "-1",
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
