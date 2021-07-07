const basicColors = {
  primaryDark: "#0071ad",
  primary: "#0085CF",
  primaryLight: "#EAF7FF",
  secondary: "#17E4BD",
  tertiary: "#6E80FF",
  error: "#FF6C6C",
  fontColor: "#000000",
};

const basicFontSizes = {
  xxs: "0.8em",
  xs: "0.9em",
  sm: "1em",
  md: "2em",
  lg: "3em",
};

export const lightTheme = {
  lightTheme: true,
  colors: {
    ...basicColors,
  },
  background: "#FFFFFF",
  fontSizes: {
    ...basicFontSizes,
  },
  borderRadius: "1rem",
  input: {
    background: "#FFFFFF",
    border: "#C6C6C6",
    selected: "#C6C6C6",
  },
};

export type ThemeTypes = typeof lightTheme;
