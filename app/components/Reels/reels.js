import React, { useState } from "react";
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
import { styles } from "./reelsStyle";
import { feedData, reelsData } from "../../globals/globalData";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";
import { Video, AVPlaybackStatus } from "expo-av";
import PagerView from "react-native-pager-view";
import Tabs from "../../Navigation/tabs";

export default function Reels({ navigation }) {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <PagerView
        style={{ width: "100%", height: "100%" }}
        scrollEnabled={true}
        showPageIndicator
        orientation={"vertical"}
        onPageSelected={(event) => {
          setActive(event.nativeEvent.position);
        }}
        initialPage={0}
      >
        {reelsData.map((reels) => {
          return (
            <View
              style={{ flex: 1, backgroundColor: colors.secondary }}
              key={reelsData.indexOf(reels)}
            >
              <Video
                style={{
                  width: "100%",
                  height: "100%",
                }}
                source={reels}
                shouldPlay={active === reelsData.indexOf(reels) ? true : false}
                isMuted={true}
                useNativeControls={false}
                resizeMode="cover"
                isLooping
              />
              <View
                style={{
                  position: "absolute",
                  alignSelf: "flex-end",
                }}
              >
                <View
                  style={{
                    marginTop: dimensions.fullHeight / 1.7,
                    marginRight: 8,
                  }}
                >
                  <TouchableOpacity style={{ padding: padding.md }}>
                    <SvgUri
                      fill={"#fff"}
                      source={require("../../Images/Like.svg")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: padding.md }}>
                    <SvgUri
                      fill={"#fff"}
                      source={require("../../Images/Comment.svg")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: padding.md }}>
                    <SvgUri
                      fill={"#fff"}
                      source={require("../../Images/Messanger.svg")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: padding.md }}>
                    <SvgUri
                      fill={"#fff"}
                      source={require("../../Images/moreIcon.svg")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.reelsBar}>
                <TouchableOpacity
                  style={{ padding: padding.xm }}
                  onPress={() => navigation.navigate("Home")}
                >
                  <SvgUri
                    fill={"#fff"}
                    source={require("../../Images/Back.svg")}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: colors.primary,
                    fontWeight: "bold",
                    fontSize: padding.xm,
                  }}
                >
                  Reels
                </Text>
                <TouchableOpacity style={{ padding: padding.xm }}>
                  <SvgUri
                    fill={"#fff"}
                    source={require("../../Images/add.svg")}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  position: "absolute",
                  marginTop: dimensions.fullHeight / 1.2,
                  marginLeft: padding.xm,
                }}
              >
                <View style={styles.postContainer}>
                  <Image
                    style={styles.profileImg}
                    source={require("../../Images/img1.jpg")}
                  />
                  <View
                    style={{ position: "absolute", marginLeft: padding.xl }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#ffff",
                      }}
                    >
                      jacob_w {"  "}
                      <Text
                        style={{ fontSize: fonts.sm, color: colors.tertiary }}
                      >
                        Follow
                      </Text>
                    </Text>
                    <Text style={{ fontSize: fonts.sm, color: colors.primary }}>
                      Tokyo, Japan
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: padding.md, color: colors.primary }}>
                  Song - Maroon 5 - Memories{" "}
                </Text>
                <Text style={{ fontSize: 14, lineHeight: 21, color: "#ffff" }}>
                  count memories, not the calories!!{"   "}
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: fonts.sm,
                      lineHeight: fonts.sm * 1.5,
                      color: "grey",
                    }}
                  >
                    ...more
                  </Text>
                </Text>
              </View>
            </View>
          );
        })}

        {/* <View style={{ width: "100%", height: "100%" }} key="2">
          <Video
            style={{
              width: "100%",
              height: "100%",
            }}
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls={false}
            resizeMode="cover"
            isLooping
          />
        </View> */}
      </PagerView>
    </View>
  );
}
