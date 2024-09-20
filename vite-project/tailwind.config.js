/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#646cff',
        'primary-dark': '#535bf2',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, rgb(26, 43, 62), rgb(20, 30, 48))',
      },
      backgroundColor: {
        'custom-bg': 'rgb(25, 32, 35)',
      },
      borderColor: {
        'custom-border': 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}