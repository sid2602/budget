const basicColors = {
  primaryDark: "#0071ad",
  primary: "#0085CF",
  primaryLight: "#EAF7FF",
  secondary: "#17E4BD",
  tertiary: "#6E80FF",
  error: "#FF6C6C",
  fontColor: "#000000",
  darkGray: "#808080",
  gray: "#CDCDCD",
  grayLight: "#F4F4F4",
};

const basicFontSizes = {
  xxs: "10px",
  xs: "14px",
  sm: "18px",
  md: "24px",
  lg: "28px",
  xl: "34px",
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
  borderRadius: "10px",
  input: {
    background: "#FFFFFF",
    border: "#C6C6C6",
    selected: "#C6C6C6",
  },
};

export type ThemeTypes = typeof lightTheme;
