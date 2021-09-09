import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../homeStyles";
import { feed } from "../../../globals/globalData";
import {
  dimensions,
  colors,
  padding,
  fonts,
} from "../../../globals/globalStyle";
import PagerView from "react-native-pager-view";
import Dots from "react-native-dots-pagination";
import SvgUri from "react-native-svg-uri";

export default function Feed(props) {
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   console.log(props.postSrc);
  // });
  return (
    <View>
      <View style={styles.feedContainer}>
        <TouchableOpacity
          style={styles.postContainer}
          onPress={() =>
            props.navigation.navigate("Profile", {
              isMine: false,
            })
          }
        >
          <Image style={styles.profileImg} source={props.src} />
          <View style={{ position: "absolute", marginLeft: padding.xl }}>
            <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
            <Text>Tokyo, Japan</Text>
          </View>
          <TouchableOpacity style={{ padding: padding.md }}>
            <SvgUri source={require("../../../Images/moreIcon.svg")} />
          </TouchableOpacity>
        </TouchableOpacity>

        <PagerView
          style={styles.pagerView}
          scrollEnabled={true}
          showPageIndicator
          onPageSelected={(event) => {
            setActive(event.nativeEvent.position);
          }}
          initialPage={0}
        >
          {props.postSrc !== undefined
            ? props.postSrc.map((postImg) => {
                return (
                  <View
                    style={{ width: "100%", height: "100%" }}
                    key={props.postSrc.indexOf(postImg)}
                  >
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={postImg}
                    />
                  </View>
                );
              })
            : null}
          {/* <View style={{ width: "100%", height: "100%" }} key="1">
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../Images/img1.jpg")}
            />
          </View>
          <View style={{ width: "100%", height: "100%" }} key="2">
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../Images/img1.jpg")}
            />
          </View>
          <View style={{ width: "100%", height: "100%" }} key="3">
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../Images/img1.jpg")}
            />
          </View> */}
        </PagerView>
        <View style={styles.postAction}>
          <View
            style={{ flex: 3, flexDirection: "row", marginLeft: padding.sm }}
          >
            <TouchableOpacity style={{ padding: padding.sm }}>
              <SvgUri source={require("../../../Images/Like.svg")} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: padding.sm }}>
              <SvgUri source={require("../../../Images/Comment.svg")} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: padding.sm }}>
              <SvgUri source={require("../../../Images/Messanger.svg")} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 16,
            }}
          >
            <Dots
              marginHorizontal={3}
              passiveColor={colors.bg}
              activeColor={colors.tertiary}
              length={props.postSrc?.length}
              active={active}
              activeDotHeight={padding.sm}
              passiveDotHeight={padding.sm}
              activeDotWidth={padding.sm}
              passiveDotWidth={padding.sm}
            />
          </View>
          <TouchableOpacity
            style={{ flex: 1, marginRight: padding.sm, padding: padding.sm }}
          >
            <SvgUri source={require("../../../Images/Save.svg")} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textStyle}>40,584 views</Text>
        <Text style={styles.textStyle}>
          joshua_l{"  "}
          <Text style={{ fontWeight: "normal" }}>
            The game in Japan was amazing and I want to share some photos...{" "}
            <Text style={{ color: "grey" }}>more</Text>
          </Text>
        </Text>
        <Text
          style={{
            ...styles.textStyle,
            marginTop: 4,
            color: "grey",
          }}
        >
          View all 24 comments
        </Text>
      </View>
    </View>
  );
}
