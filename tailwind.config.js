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
        '1xl': '8px',
        '3xl': '22px',
      },
    },
  },
  plugins: [],
}

