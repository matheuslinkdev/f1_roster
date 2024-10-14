import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blood: {
          "50": "#ffeeee",
          "100": "#ffdada",
          "200": "#ffbbbb",
          "300": "#ff8b8b",
          "400": "#ff4949",
          "500": "#ff1111",
          "600": "#ff0000",
          "700": "#e70000",
          "800": "#be0000",
          "900": "#a80000",
          "950": "#560000",
        },
        marine: {
          "50": "#f0f9ff",
          "100": "#e0f3fe",
          "200": "#b9e8fe",
          "300": "#7cd7fd",
          "400": "#36c4fa",
          "500": "#0cadeb",
          "600": "#0090d0",
          "700": "#016ea3",
          "800": "#065d86",
          "900": "#0b4d6f",
          "950": "#07314a",
        },
        "red-violet": {
          "50": "#fef1fb",
          "100": "#fee5f9",
          "200": "#ffcbf5",
          "300": "#ffa0ea",
          "400": "#ff65da",
          "500": "#fc38c5",
          "600": "#ed15a6",
          "700": "#c2077f",
          "800": "#aa0a6e",
          "900": "#8e0d5e",
          "950": "#570037",
        },
      },
    },
  },
  plugins: [],
};
export default config;
