/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      md: '400px', // 사용자 정의 미디어 쿼리 추가
      lg: '768px',
      xl: '1024px',
      // 필요에 따라 다른 미디어 쿼리도 추가할 수 있습니다.
    },
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },
  },
  plugins: [],
};
