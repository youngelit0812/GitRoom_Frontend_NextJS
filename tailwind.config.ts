import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "linearGradient-1": "linear-gradient(45deg, #FFFFFF, #D1D0FF)",        
      }),
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {        
        banner: "#262534",
        primary: "#ffffff",
        secondary: "#1E1D2D",
        placeholder: "#DEDCF9",
        text: "#747272",
        dark: "#747272",
        cred: "#FD2C2F",
        body: "#000000"
      },      
      fontFamily: {
        primary: ['var(--font-chakrapetch)'],
        secondary: ['var(--font-josefin)']
      },
      opacity: {
        '35': '0.35',
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;