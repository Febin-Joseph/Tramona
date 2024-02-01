/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          10: '#2F5BF6'
        },
        white: {
          10: '#FFFFFF',
        },
        gray: {
          10: '#787878',
          20: '#D5D8DE',
          30: '#9CA3AF'
        },
      },
      screens: {
        xs: '400px',
        '3xl': '2200px',
        '4xl': '2500px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        0: '0px',
        '1xl': '4px',
        '3xl': '22px',
      },
    },
  },
  plugins: [],
}

