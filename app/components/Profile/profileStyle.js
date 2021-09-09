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
  profileBar: {
    flexDirection: "row",
    width: "55%",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginRight: padding.xm,
  },
  profileSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: dimensions.fullWidth - padding.xm * 2,
    marginTop: padding.sm,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "grey",
    borderWidth: 3,
  },
  followCounts: { fontWeight: "bold", fontSize: fonts.lg },
  bio: {
    alignSelf: "flex-start",
    marginLeft: padding.sl,
    marginTop: padding.sm,
  },
  name: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: padding.xm,
    lineHeight: 1.5 * padding.xm,
    fontFamily: fonts.primary,
  },
  status: {
    color: "#262626",
    lineHeight: fonts.sm * 1.5,
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
  },
  followButton: {
    width: dimensions.fullWidth - padding.xm * 2,
    height: 32,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: padding.xm,
  },
  barIcons: { margin: 4 },
  postImgs: {
    width: dimensions.fullWidth / 3 - 4,
    height: dimensions.fullWidth / 3 - 4,
    margin: 1,
  },
});
