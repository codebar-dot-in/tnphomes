/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: '#0F172A',
          emerald: '#10B981',
          yellow: '#EAB308',
          bg: '#F8FAFC',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 35px -20px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
}

