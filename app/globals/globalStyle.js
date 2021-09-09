import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  primary: "#ffff",
  secondary: "#262626",
  tertiary: "#3797EF",
  bg: "#D8D8D8",
};

export const padding = {
  sm: 8,
  md: 12,
  xm: 16,
  sl: 24,
  lg: 48,
  xl: 64,
};

export const fonts = {
  sm: 14,
  md: 18,
  lg: 24,
  primary: "Roboto",
};
