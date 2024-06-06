import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "376px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "linearGradient-1": "linear-gradient(45deg, #FFFFFF, #D1D0FF)",  
        'community-mbLgBg': "url('/community/mobile_lg_card_bg.png')",
        'community-dtLgBg': "url('/community/desktop_lg_card_bg.png')",
        'community-mbMdBg': "url('/community/mobile_md_card_bg.png')",
        'community-dtMdBg': "url('/community/desktop_md_card_bg.png')",
      }),
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {        
        banner: "#262534",
        borderColor: "#CDCCFF",
        primary: "#ffffff",
        secondary: "#1E1D2D",
        third: "#8AABFF",
        fourth: "#B385FF",
        fifth: "#BAB9FF",
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
        '80': '0.8',
        '90': '0.9',
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
