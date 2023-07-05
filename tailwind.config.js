/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Montserrat', ' sans-serif']
      },
      colors: {
        bodyColor: '#191919',
        textColor: 'rgba(255,255,255,.85)',
        designColor: '#57cc99',
        titleRoundBg: 'linear-gradient(135deg, rgba(120,204,109,.15) 0%, rgba(120,204,109,1%) 100%)'
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          }
        }
      },
      boxShadow: {}
    }
  },
  plugins: []
}
