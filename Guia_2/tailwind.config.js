/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary": '#5a4fcf',
        "secondary": '#786fd8',
        "tertiary": '#303033',
        "quaternary": '#e583ff',
      },
      fontFamily: {
        "primary": "Muli",
      },
      textColor: {
        "primary": '#5a4fcf',
        "secondary": '#786fd8',
        "tertiary": '#1b183f',
        "quaternary": '#e583ff'
      }
    },
  },
  plugins: [],
}