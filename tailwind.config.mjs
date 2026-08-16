/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de boda: azul marino + dorado champán
        brand: {
          50:      '#EEF0F5',
          100:     '#DDE2EC',
          200:     '#C3CCDD',
          300:     '#95A3BE',
          400:     '#5E6E91',
          500:     '#3C4E74',
          600:     '#2A3A5C',
          700:     '#1F2A48',
          800:     '#18203A',
          900:     '#121829',
          DEFAULT: '#1F2A48',
        },
        ink:  { DEFAULT: '#1B2333', soft: '#5A6377', muted: '#9AA0AE' },
        bg:   { DEFAULT: '#F6F5F1', card: '#FFFFFF' },
        line: '#E4E7EF',
        gold: '#C4963E',
        wa:   '#25D366',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Fraunces', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:  '0 1px 3px rgba(27,35,51,0.06), 0 8px 24px rgba(27,35,51,0.04)',
        hover: '0 4px 6px rgba(27,35,51,0.04), 0 16px 40px rgba(31,42,72,0.12)',
      },
      borderRadius: { '2xl': '1rem', '3xl': '1.25rem' },
    },
  },
  plugins: [],
};
