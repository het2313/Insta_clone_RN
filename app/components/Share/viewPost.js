import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { Camera } from "expo-camera";
import { colors, dimensions, padding } from "../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";
import { styles } from "./shareStyle";

export default function ViewPost({ route, navigation }) {
  return (
    <View style={styles.postviewMain}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: dimensions.fullWidth - 32,
        }}
      >
        <TouchableOpacity
          style={{ padding: padding.sm }}
          onPress={() => navigation.goBack()}
        >
          <SvgUri
            fill={colors.secondary}
            source={require("../../Images/Back.svg")}
          />
        </TouchableOpacity>
        <Text
          style={{
            padding: padding.sm,
            fontSize: padding.xm,
            fontWeight: "bold",
          }}
        >
          Post
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <SvgUri
            style={{ padding: padding.sm }}
            fill={colors.secondary}
            source={require("../../Images/Close.svg")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: dimensions.fullHeight / 2.5,
          height: (4 / 3) * (dimensions.fullHeight / 2.5),
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: route.params.photo.uri }}
        />
      </View>
      <View style={{ width: "100%" }}>
        <TextInput
          style={{
            width: "100%",
            height: padding.lg,
            backgroundColor: colors.bg,
            borderWidth: 0.5,
            borderColor: colors.secondary,
            borderRadius: 4,
            padding: 12,
          }}
          placeholder={"caption"}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            height: padding.lg,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.tertiary,
            borderRadius: 4,
            marginTop: 32,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              fontSize: padding.xm,
              fontWeight: "bold",
              color: colors.primary,
            }}
          >
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
