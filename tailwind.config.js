/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(172, 67%, 45%)',
        neutral: {
          100: 'hsl(183, 100%, 15%)',
          200: 'hsl(186, 14%, 43%)',
          300: 'hsl(184, 14%, 56%)',
          400: 'hsl(185, 41%, 84%)',
          500: 'hsl(202, 50%, 97%)',
          600: 'hsl(0, 0%, 100%)',
        },
      },
      backgroundImage: {
        'icon-dollar': "url('/src/assets/icon-dollar.svg')",
        'icon-person': "url('/src/assets/icon-person.svg')",
      },
      backgroundPosition: {
        'left-1/2': '1rem center',
      },
      gridTemplateRows: {
        balanced: '1fr 2fr 1fr',
      },
    },
  },
  plugins: [],
};
