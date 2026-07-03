/**@type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
  serif: ["Playfair Display", "serif"],
  sans: ["Inter","sans-serif"],
      },
      colors: {
        'navy': '#1A2A3A',
        'gold':'#9A84C',
        'warm-gray': '#F5F0EB',
        'dark-text': '#2C3E50',
        'light-text': '#7F8C8D',
        'errors': '#E74C3C',
      },
    },
  },
  plugins: [],
}

