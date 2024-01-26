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
            // make red primary
            'primary': {
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

            // 'primary': {
            //     '50': '#f0f1fd',
            //     '100': '#e4e5fb',
            //     '200': '#cdcef8',
            //     '300': '#b0aff2',
            //     '400': '#988fea',
            //     '500': '#8573e1',
            //     '600': '#7758d3',
            //     '700': '#7155be',
            //     '800': '#543d96',
            //     '900': '#463778',
            //     '950': '#2a2046',
            //
            // }
      }
    },
  },
  plugins: [],
};
export default config;
