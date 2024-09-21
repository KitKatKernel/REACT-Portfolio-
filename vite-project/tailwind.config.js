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
        'gradient-header': 'linear-gradient(90deg, rgba(123, 20, 255, 0.09) 2%, rgba(160, 46, 214, 0.26) 27%, rgba(181, 5, 249, 0.04) 80%)',
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