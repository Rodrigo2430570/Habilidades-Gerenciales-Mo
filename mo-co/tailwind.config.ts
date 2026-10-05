import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102e38', navy: '#102e38', raised: '#183c47',
        paper: '#f4f7f5', mint: '#b5dfc5', green: '#265b49',
        signal: '#efd061', muted: '#48616a', line: '#c8d4d2',
      },
      fontFamily: {
        display: ['Chakra Petch', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      maxWidth: { content: '1280px' },
    },
  },
  plugins: [],
} satisfies Config;
