/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        primary : "#045EB0",
        semiBlack : "rgba(0,0,0,0.5)",
        dark : "rgb(60,64,67)"
      }
    },
  },
  plugins: [],
}

