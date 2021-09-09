import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../homeStyles";
import { stories } from "../../../globals/globalData";
import {
  dimensions,
  colors,
  padding,
  fonts,
} from "../../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";
import { LinearGradient } from "expo-linear-gradient";

const Item = ({ item, navigation }) => (
  <View style={styles.storiesContainer}>
    <LinearGradient
      colors={["#FFA500", "#C5121B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ borderRadius: 50, marginLeft: padding.md }}
    >
      <View style={styles.touchStories}>
        <Image style={styles.storiesImg} source={item.src} />
      </View>
    </LinearGradient>
    <Text style={{ marginLeft: padding.sm }}>{item.title}</Text>
  </View>
);

export default function Stories({ navigation }) {
  // const renderItem = ({ item }) => {
  //   return (
  //     <TouchableWithoutFeedback onPress={() => {}}>
  //       <Item item={item} />
  //     </TouchableWithoutFeedback>
  //   );
  // };
  return (
    <View style={styles.storiesContainerMain}>
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("reels");
            }}
          >
            <Item item={item} navigation={navigation} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
