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
import { styles } from "./homeStyles";
import { feedData } from "../../globals/globalData";
import AppBar from "./comps/appBar";
import Stories from "./comps/stories";
import Feed from "./comps/feed";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";

export default function Home({ navigation }) {
  return (
    <View>
      <AppBar navigation={navigation} />
      <ScrollView>
        <Stories navigation={navigation} />
        {feedData?.map((feeds) => {
          return (
            <Feed
              navigation={navigation}
              title={feeds.title}
              src={feeds.src}
              postSrc={feeds.postSrc}
            />
          );
        })}
        <Feed />
      </ScrollView>
    </View>
  );
}
