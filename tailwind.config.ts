import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            default: {
              "50": "#fafafa",
              "100": "#f2f2f3",
              "200": "#ebebec",
              "300": "#e3e3e6",
              "400": "#dcdcdf",
              "500": "#d4d4d8",
              "600": "#afafb2",
              "700": "#8a8a8c",
              "800": "#656567",
              "900": "#404041",
              foreground: "#000",
              DEFAULT: "#d4d4d8",
            },
            primary: {
              "50": "#dfe4ff",
              "100": "#b3bfff",
              "200": "#8699ff",
              "300": "#5974ff",
              "400": "#2d4eff",
              "500": "#0029ff",
              "600": "#0022d2",
              "700": "#001ba6",
              "800": "#001379",
              "900": "#000c4d",
              foreground: "#fff",
              DEFAULT: "#0029ff",
            },
            secondary: {
              "50": "#eee4f8",
              "100": "#d7bfef",
              "200": "#bf99e5",
              "300": "#a773db",
              "400": "#904ed2",
              "500": "#7828c8",
              "600": "#6321a5",
              "700": "#4e1a82",
              "800": "#39135f",
              "900": "#240c3c",
              foreground: "#fff",
              DEFAULT: "#7828c8",
            },
            success: {
              "50": "#e2f8ec",
              "100": "#b9efd1",
              "200": "#91e5b5",
              "300": "#68dc9a",
              "400": "#40d27f",
              "500": "#17c964",
              "600": "#13a653",
              "700": "#0f8341",
              "800": "#0b5f30",
              "900": "#073c1e",
              foreground: "#000",
              DEFAULT: "#17c964",
            },
            warning: {
              "50": "#fef4e4",
              "100": "#fce4bd",
              "200": "#fad497",
              "300": "#f9c571",
              "400": "#f7b54a",
              "500": "#f5a524",
              "600": "#ca881e",
              "700": "#9f6b17",
              "800": "#744e11",
              "900": "#4a320b",
              foreground: "#000",
              DEFAULT: "#f5a524",
            },
            danger: {
              "50": "#fee1eb",
              "100": "#fbb8cf",
              "200": "#f98eb3",
              "300": "#f76598",
              "400": "#f53b7c",
              "500": "#f31260",
              "600": "#c80f4f",
              "700": "#9e0c3e",
              "800": "#73092e",
              "900": "#49051d",
              foreground: "#000",
              DEFAULT: "#f31260",
            },
            background: "#ffffff",
            foreground: {
              "50": "#dfdfdf",
              "100": "#b3b3b3",
              "200": "#868686",
              "300": "#595959",
              "400": "#2d2d2d",
              "500": "#000000",
              "600": "#000000",
              "700": "#000000",
              "800": "#000000",
              "900": "#000000",
              foreground: "#fff",
              DEFAULT: "#000000",
            },
            content1: { DEFAULT: "#ffffff", foreground: "#000" },
            content2: { DEFAULT: "#f4f4f5", foreground: "#000" },
            content3: { DEFAULT: "#e4e4e7", foreground: "#000" },
            content4: { DEFAULT: "#d4d4d8", foreground: "#000" },
            focus: "#006FEE",
            overlay: "#000000",
            divider: "#111111",
          },
        },
        dark: {
          colors: {
            default: {
              "50": "#131315",
              "100": "#1e1e21",
              "200": "#29292e",
              "300": "#34343a",
              "400": "#3f3f46",
              "500": "#616166",
              "600": "#828287",
              "700": "#a4a4a7",
              "800": "#c5c5c8",
              "900": "#e7e7e8",
              foreground: "#fff",
              DEFAULT: "#3f3f46",
            },
            primary: {
              "50": "#000c4d",
              "100": "#001379",
              "200": "#001ba6",
              "300": "#0022d2",
              "400": "#0029ff",
              "500": "#2d4eff",
              "600": "#5974ff",
              "700": "#8699ff",
              "800": "#b3bfff",
              "900": "#dfe4ff",
              foreground: "#fff",
              DEFAULT: "#0029ff",
            },
            secondary: {
              "50": "#240c3c",
              "100": "#39135f",
              "200": "#4e1a82",
              "300": "#6321a5",
              "400": "#7828c8",
              "500": "#904ed2",
              "600": "#a773db",
              "700": "#bf99e5",
              "800": "#d7bfef",
              "900": "#eee4f8",
              foreground: "#fff",
              DEFAULT: "#7828c8",
            },
            success: {
              "50": "#073c1e",
              "100": "#0b5f30",
              "200": "#0f8341",
              "300": "#13a653",
              "400": "#17c964",
              "500": "#40d27f",
              "600": "#68dc9a",
              "700": "#91e5b5",
              "800": "#b9efd1",
              "900": "#e2f8ec",
              foreground: "#000",
              DEFAULT: "#17c964",
            },
            warning: {
              "50": "#4a320b",
              "100": "#744e11",
              "200": "#9f6b17",
              "300": "#ca881e",
              "400": "#f5a524",
              "500": "#f7b54a",
              "600": "#f9c571",
              "700": "#fad497",
              "800": "#fce4bd",
              "900": "#fef4e4",
              foreground: "#000",
              DEFAULT: "#f5a524",
            },
            danger: {
              "50": "#49051d",
              "100": "#73092e",
              "200": "#9e0c3e",
              "300": "#c80f4f",
              "400": "#f31260",
              "500": "#f53b7c",
              "600": "#f76598",
              "700": "#f98eb3",
              "800": "#fbb8cf",
              "900": "#fee1eb",
              foreground: "#000",
              DEFAULT: "#f31260",
            },
            background: "#000000",
            foreground: {
              "50": "#4d4d4d",
              "100": "#797979",
              "200": "#a6a6a6",
              "300": "#d2d2d2",
              "400": "#ffffff",
              "500": "#ffffff",
              "600": "#ffffff",
              "700": "#ffffff",
              "800": "#ffffff",
              "900": "#ffffff",
              foreground: "#000",
              DEFAULT: "#ffffff",
            },
            content1: { DEFAULT: "#18181b", foreground: "#fff" },
            content2: { DEFAULT: "#27272a", foreground: "#fff" },
            content3: { DEFAULT: "#3f3f46", foreground: "#fff" },
            content4: { DEFAULT: "#52525b", foreground: "#fff" },
            focus: "#006FEE",
            overlay: "#ffffff",
            divider: "#ffffff",
          },
        },
      },
      layout: {
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: { small: "0.3rem", medium: "0.5rem", large: "0.875rem" },
        borderWidth: { small: "0.2px", medium: "1px", large: "3px" },
        disabledOpacity: "0.5",
        dividerWeight: "1",
        hoverOpacity: "0.9",
      },
    }),
  ],
};
