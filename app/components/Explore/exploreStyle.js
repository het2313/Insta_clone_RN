import { StyleSheet } from "react-native";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: dimensions.fullWidth,
    alignItems: "center",
    // justifyContent: "space-around",
    marginTop: padding.lg,
  },
  exploreImgs: {
    width: dimensions.fullWidth / 3 - 4,
    height: dimensions.fullWidth / 3 - 4,
    margin: 1,
  },
  bigImgs: {
    width: dimensions.fullWidth / 1.5 - 6,
    height: dimensions.fullWidth / 1.5 - 6,
    margin: 1,
  },
});
