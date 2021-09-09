import { StyleSheet } from "react-native";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";

export const styles = StyleSheet.create({
  // appbar

  appbarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: padding.lg,
    marginTop: padding.sl,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.secondary,
  },

  // stories

  storiesContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  storiesContainerMain: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: padding.xl * 2,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.secondary,
  },
  touchStories: {
    borderRadius: 50,
    padding: 2,
    margin: 2.5,
    backgroundColor: "white",
  },
  storiesImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  // feed

  feedContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: dimensions.fullWidth,
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
  pagerView: { width: "100%", height: dimensions.fullWidth },
  postAction: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: fonts.primary,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: padding.xm,
  },
});
