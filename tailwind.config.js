/** @type {import('tailwindcss').Config} */

import {defaultTheme} from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  purge: [
    "./src/*.{html,js}"
  ],
  darkMode: "media",
  theme: {
    screens: {
      sm : '540px',
      lg : '1000px',
      "4k" : "2560px"
    },
    fontFamily: {
      sans : ["Roboto", ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
