import { StyleSheet } from "react-native";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
    backgroundColor: "#0000",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: padding.sl,
  },
  reelsBar: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
  postContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: dimensions.fullWidth - padding.xm * 2,
    height: 65,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
