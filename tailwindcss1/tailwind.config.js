/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        babypink : '#f7cac9',
        brightblue: '#034f84',
        favgreen:'#88b04b',
        gliter:{
          DEFAULT : '#DFBD69',
          pink: '#F50B94',
          gold:'#CCBA78',
          blue:'#0055A4',
          purpule:'#381769',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // Extending sans family
        serif: ['Georgia', 'Times New Roman', 'serif'],      // Extending serif family
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'], // Extending monospace family
        cooo: ['"CustomFontName"', 'sans-serif'], // Adding a completely custom font family
      },
    },
  },
  plugins: [],
}

