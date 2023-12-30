/** @type {import('tailwindcss').Config} */

// import {defaultTheme} from "tailwindcss";

export default {
  content: ["./src/*.{html,js,ts,jsx,tsx}", "./src/**/*.{html,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Roboto"]
      },
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
