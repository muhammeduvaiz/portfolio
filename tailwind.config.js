/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        playwrite: ['"Playwrite AU SA"', 'sans-serif'],
        'playwrite-deco': ['"Playwrite ES Deco Guides"', 'cursive'],
        rubik: ['"Rubik Vinyl"', 'cursive'],
      },
    },
  },
  plugins: [],
}