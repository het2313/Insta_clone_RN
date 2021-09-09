import { StyleSheet } from "react-native";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";

export const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: dimensions.fullWidth - 32,
    marginLeft: 16,
    marginTop: dimensions.fullHeight / 1.15,
  },
  postviewMain: {
    flexDirection: "column",
    height: dimensions.fullHeight,
    width: dimensions.fullWidth - 32,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 12,
  },
});
