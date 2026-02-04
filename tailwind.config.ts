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
          DEFAULT: '#ff4757',
          dark: '#ee2e3f',
          light: '#ff6b7a',
        },
        secondary: {
          DEFAULT: '#2ed573',
          dark: '#26be5f',
          light: '#4ade87',
        },
        dark: {
          DEFAULT: '#1e272e',
          light: '#2c3e50',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-space': 'linear-gradient(135deg, #1e272e, #2c3e50)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 71, 87, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 71, 87, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
