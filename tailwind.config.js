/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F3EDE3',
          300: '#E9DFD0',
          400: '#D9CBB6',
        },
        gold: {
          300: '#D9BC85',
          400: '#C9A86A',
          500: '#B08D57',
          600: '#9A7848',
          700: '#7E623A',
        },
        ink: {
          700: '#3A332B',
          800: '#2A2520',
          900: '#1F1B16',
        },
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(31, 27, 22, 0.12)',
        card: '0 18px 50px -20px rgba(31, 27, 22, 0.22)',
        gold: '0 12px 36px -16px rgba(176, 141, 87, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1s ease both',
        'slow-zoom': 'slow-zoom 12s ease-out both',
      },
    },
  },
  plugins: [],
};
