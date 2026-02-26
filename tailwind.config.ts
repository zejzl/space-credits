import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00f0ff',
          dark: '#00c4d4',
          light: '#33f3ff',
        },
        secondary: {
          DEFAULT: '#ff9500',
          dark: '#e08500',
          light: '#ffb347',
        },
        accent: {
          purple: '#7c3aed',
          cyan: '#00f0ff',
          amber: '#ff9500',
        },
        dark: {
          DEFAULT: '#0a0e1a',
          light: '#111827',
        },
      },
      fontFamily: {
        mono: ['var(--font-space-mono)', 'monospace'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-space': 'linear-gradient(135deg, #0a0e1a, #111827)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 240, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
