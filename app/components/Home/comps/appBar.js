import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../homeStyles";
import {
  dimensions,
  colors,
  padding,
  fonts,
} from "../../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";

export default function AppBar({ navigation }) {
  return (
    <View style={styles.appbarContainer}>
      {/* <SvgUri
        style={{ flex: 1, marginLeft: padding.md }}
        source={require("../../../Images/CameraIcon.svg")}
      /> */}
      <SvgUri
        style={{ flex: 6, marginLeft: padding.xm }}
        source={require("../../../Images/Instagram_logo_small.svg")}
      />
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Share")}
      >
        <SvgUri source={require("../../../Images/add.svg")} />
      </TouchableOpacity>

      <SvgUri
        style={{ flex: 1 }}
        source={require("../../../Images/Messanger.svg")}
      />
    </View>
  );
}
