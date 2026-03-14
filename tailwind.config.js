/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6eee5',
        sand: '#ead9c7',
        coral: '#c86a4a',
        blush: '#f3c8b4',
        forest: '#1f4b43',
        pine: '#13342e',
        ink: '#1f2933',
        mist: '#fdf9f5',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(31, 41, 51, 0.12)',
      },
      backgroundImage: {
        glow:
          'radial-gradient(circle at top left, rgba(243, 200, 180, 0.55), transparent 36%), radial-gradient(circle at bottom right, rgba(31, 75, 67, 0.12), transparent 38%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
