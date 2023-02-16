/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        link: '#549FF9',
        drop: '#F5F5F5',
        bgDark: '#191919',
        profileLink: '#C9AC8C',
        searchBg: '#f5f5f5',
        searchBgDark: '#404040',
        searchBtn: '#EFDAC3',
        searchDark: '#3C2710',
        searchPlaceholder: '#0d0d0d4c',
        searchPlaceholderDark: '#ffffff4c',
        dropdownDark: '#222',
        bgAuthorCard: '#1E1E1E',
        colorCardDate: '#ffffff99',
        bgDarkAdd: '#1b1b1b',
        bgDarkAddImg: '#4d4d4d',
        colorSort: '#0d0d0d99'
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
