/** @type {import('tailwindcss').Config} */

// import {defaultTheme} from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  darkMode: "media",
  theme: {
    fontFamily: {
      'sans': ["Roboto"]
    },
    extend: {
      screens: {
        'ssm': '540px',
        'llg': '1000px',
        'mmd': '780px',
        "4k": "2560px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
