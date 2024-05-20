import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "body, main": {
        bgGradient: "radial(red.50, common.200)",
        backgroundAttachment: "fixed",
        minHeight: "100dvh",
        width: "100%",
      },
    },
  },
  //   fonts: {
  //     heading: "var(--font-rubik)",
  //     body: "var(--font-rubik)",
  //   },
  colors: {
    common: {
      "50": "#f6f6f6",
      "100": "#e7e7e7",
      "200": "#d1d1d1",
      "300": "#b0b0b0",
      "400": "#888888",
      "500": "#6d6d6d",
      "600": "#464646",
      "700": "#353535",
      "800": "#252525",
      "900": "#121212",
      "950": "#050505",
    },

    'red': {
        '50': '#fff0f0',
        '100': '#ffdddd',
        '200': '#ffc1c1',
        '300': '#ff9595',
        '400': '#ff5959',
        '500': '#ff2626',
        '600': '#fc0606',
        '700': '#eb0000',
        '800': '#af0505',
        '900': '#900c0c',
        '950': '#500000',
    },
  },
});
