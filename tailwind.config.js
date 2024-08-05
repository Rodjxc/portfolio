/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: {custom: '#181818'},
        pink: {
          custom: '#f6c5b7',
        },
      },
    },
  },
  plugins: [],
}
