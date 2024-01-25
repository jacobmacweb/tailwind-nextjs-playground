import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        colors: {
            'red': {
                '50': '#fff0f0',
                '100': '#ffdddd',
                '200': '#ffc1c1',
                '300': '#ff9595',
                '400': '#ff5959',
                '500': '#ff2626',
                '600': '#fc0606',
                '700': '#e50000',
                '800': '#af0505',
                '900': '#900c0c',
                '950': '#500000',
            },

      }
    },
  },
  plugins: [],
};
export default config;
