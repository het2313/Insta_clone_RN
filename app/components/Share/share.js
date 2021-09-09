import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { colors, dimensions } from "../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";
import { styles } from "./shareStyle";

export default function Share({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync();
    console.debug(photo);
    navigation.navigate("Viewpost", {
      photo: photo,
    });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        flashMode={flash ? "on" : "off"}
        ref={ref}
      >
        <View style={styles.main}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <SvgUri
              fill={colors.primary}
              source={require("../../Images/flip.svg")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={_takePhoto}
          >
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: colors.primary,
                opacity: 0.3,
                borderColor: "red",
                borderWidth: 4,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFlash(!flash);
            }}
          >
            {flash ? (
              <SvgUri
                fill={"#ffff"}
                source={require("../../Images/flashOn.svg")}
              />
            ) : (
              <SvgUri
                fill={"#ffff"}
                source={require("../../Images/flashOff.svg")}
              />
            )}
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
