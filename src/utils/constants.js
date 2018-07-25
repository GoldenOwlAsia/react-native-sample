import { Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fonts = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 28,
  primary: "Cochin"
};

export const colors = {
  WHITE: "#FFFFFF",
  BLUE_50: "#85929E",
  BLUE_100: "#5D6D7E",
  BLUE_200: "#34495E",
  BLUE_300: "#2E4053",
  BLUE_400: "#283747",
  BLUE_500: "#212F3C"
};
