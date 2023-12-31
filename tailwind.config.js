/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'dark-cyan': 'hsl(158, 36%, 37%)',
      'darker-cyan': 'hsl(158, 36%, 20%)',
      'cream': 'hsl(30, 38%, 92%)',
      'very-dark-blue': 'hsl(212, 21%, 14%)',
      'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      white: 'hsl(0, 0%, 100%)'
    },
    screens: {
      desktop: '1440px'
    },
    fontFamily: {
      fraunces: 'Fraunces, sans-serif',
      montserrat: 'Montserrat, sans-serif'
    },
    letterSpacing: {
      perfume: '0.5em'
    },
    extend: {},
  },
  plugins: [],
}

