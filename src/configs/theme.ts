import type { ThemeDefinition } from "vuetify";

export const darkTheme: { [key in string]: ThemeDefinition } = {
  dark: {
    dark: true,
    colors: {
      primary: "#1867C0",
      success: "#00ff00",
    },
    variables: {},
  },

  light: {
    dark: false,
    colors: {
      primary: "#0aa8fc",
      success: "#0fffbc",
    },
    variables: {},
  },
};
