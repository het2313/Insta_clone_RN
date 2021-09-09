import { StyleSheet } from "react-native";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: dimensions.fullWidth,
    // height: dimensions.fullHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    marginTop: 0,
    alignItems: "center",
    justifyContent: "space-between",
    height: dimensions.fullHeight - padding.lg,
    width: dimensions.fullWidth - padding.xl,
  },
  backIcon: {
    alignSelf: "flex-start",
    marginTop: 0,
  },
  instaIcon: {
    marginTop: padding.xl,
  },
  formView: { width: "100%", marginTop: padding.lg },
  input: {
    height: padding.lg,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: "#FAFAFA",
    padding: 10,
    marginVertical: padding.md,
  },
  loginText: {
    color: colors.tertiary,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
  },
  forgotPass: {
    alignSelf: "flex-end",
    padding: padding.sm,
    marginRight: -padding.sm,
  },
  button: {
    width: "100%",
    height: padding.lg,
    backgroundColor: colors.tertiary,
    borderRadius: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: padding.md,
  },
  buttonText: {
    color: colors.primary,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
  },
  fbLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: padding.lg,
  },
  fbText: {
    color: colors.tertiary,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
    marginLeft: padding.sm,
  },
  seperator: { marginTop: padding.lg },
  option: {
    marginTop: padding.lg - padding.sm,
  },
  optionText: {
    color: colors.secondary,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
    padding: padding.sm,
  },
});
