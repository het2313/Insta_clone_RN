import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../components/Auth/LogIn";
import SignUp from "../components/Auth/SignUp";
import Tabs from "./tabs";
import Reels from "../components/Reels/reels";
import Share from "../components/Share/share";
import ViewPost from "../components/Share/viewPost";
import Profile from "../components/Profile/profile";

const Stack = createNativeStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Share" component={Share} />
      <Stack.Screen name="Viewpost" component={ViewPost} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
