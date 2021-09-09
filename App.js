import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./app/components/Auth/LogIn";
import SignUp from "./app/components/Auth/SignUp";
import Home from "./app/components/Home/Home";
import Tabs from "./app/Navigation/tabs";
import Reels from "./app/components/Reels/reels";
import MainNav from "./app/Navigation/mainNavigation";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <LogIn /> */}
    //   <SignUp />
    //   {/* <Home /> */}
    // </View>

    // <Reels />

    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: width,
//     // height: Dimensions.get("window").height,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
