import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { dimensions, colors, padding, fonts } from "../globals/globalStyle";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/profile";
import Explore from "../components/Explore/explore";
import Reels from "../components/Reels/reels";
import SvgUri from "react-native-svg-uri";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Not done yet</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={"red"}
      inactiveColor={colors.secondary}
      shifting={true}
      barStyle={{
        height: 50,
        backgroundColor: "#fff",
        borderTopWidth: 0.5,
        borderBottomColor: colors.secondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <SvgUri fill={color} source={require("../Images/home.svg")} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <SvgUri
              fontWeight={"bold"}
              fill={color}
              source={require("../Images/search.svg")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <SvgUri
              fill={color}
              source={require("../Images/instagram-reels.svg")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="liking"
        component={SettingsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <SvgUri fill={color} source={require("../Images/Like.svg")} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        // children={() => <Profile />}
        component={Profile}
        initialParams={{ isMine: true }}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
              }}
              source={require("../Images/img1.jpg")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
