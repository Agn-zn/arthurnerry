/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B090A',
        'bg-secondary': '#171214',
        'text-primary': '#F5F0ED',
        'text-secondary': '#B0A5A5',
        'accent-wine': '#8F3447',
        'accent-burgundy': '#572530',
        'accent-champagne': '#D7BFA6',
        'border-subtle': '#30272A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest2': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
