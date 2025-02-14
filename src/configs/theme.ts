import type { ThemeDefinition } from "vuetify";

export const themes: { [key in string]: ThemeDefinition } = {
  dark: {
    dark: true,
    colors: {
      primary: "#e3efd3",
      secondary: "#aec3b0",
      tertiary: "#6b8f71",
      surface: "#345635",
      background: "#0d2b1d",
    },
    variables: {},
  },

  light: {
    dark: false,
    colors: {
      primary: "#0d2b1d",
      secondary: "#345635",
      tertiary: "#6b8f71",
      surface: "#aec3b0",
      background: "#e3efd3",
    },
    variables: {},
  },
};
