/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          custom: '#f6c5b7',
        },
      },
    },
  },
  plugins: [],
}
