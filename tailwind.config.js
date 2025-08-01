/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '500px'
      },
      colors: {
        myPalette: {
          100: '#CCD5AE',
          200: '#E9EDC9',
          300: '#FEFAE0',
          400: '#FAEDCD',
          500: '#D4A373'
        },
        myDoodlePalette: {
          bg: '#fdf6e3',      // 부드러운 크림색 배경
          card: '#ffffff',    // 카드 배경
          text: '#4a4a4a',    // 기본 텍스트
          accent: '#fa8072',  // 포인트 컬러 (살몬색)
          border: '#4a4a4a',  // 테두리 및 그림자 색
        },
      },
      boxShadow: {
        doodle: '4px 4px 0px #4a4a4a',
      },
    },
  },
  plugins: [],
}