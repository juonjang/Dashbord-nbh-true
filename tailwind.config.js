module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['var(--font-prompt)'],
        'open-sans': ['var(--font-open-sans)'],
      },
      colors: {
        'hospital-blue': '#1E88E5',
        'hospital-light-blue': '#64B5F6',
        'hospital-dark-blue': '#1565C0',
        'hospital-green': '#004643',
        'hospital-red': '#E16162',
        'hospital-white': '#EFF0F3',
        'hospital-blue-green': '#ABD1C6',
        'custom-green':'#ABD1C6'
        

      }
    },
  },
  plugins: [],
}