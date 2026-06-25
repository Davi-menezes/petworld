/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber:  { 300:'#fcd34d', 400:'#fbbf24', 500:'#f59e0b' },
        orange: { 400:'#fb923c', 500:'#f97316', 600:'#ea580c' },
        rose:   { 400:'#fb7185', 500:'#f43f5e' },
        cream:  '#fef9f0',
        surface:'#1a110a',
        bg:     '#0f0a06',
      },
      fontFamily: {
        sans:    ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
