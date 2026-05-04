import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          dark: '#0f0f0f',
        },
        flame: {
          DEFAULT: '#ff6b35',
          light: '#ff8659',
          dark: '#e55420',
        },
        copper: {
          DEFAULT: '#c77d3a',
          light: '#d99a5e',
          dark: '#a8631f',
        },
        cream: {
          DEFAULT: '#f5e6d3',
          light: '#faf1e3',
          dark: '#e8d4b8',
        },
        ember: '#8b2500',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        accent: ['var(--font-bebas)', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
        'flame-pulse': 'flame-pulse 2.2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out both',
      },
      keyframes: {
        'flame-pulse': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'flame-gradient': 'linear-gradient(135deg, #ff6b35 0%, #e55420 50%, #8b2500 100%)',
        'copper-gradient': 'linear-gradient(135deg, #d99a5e 0%, #c77d3a 50%, #a8631f 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
