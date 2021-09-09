import React, { useEffect, useState } from "react";
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
import { styles } from "./profileStyle";
import { feedData, imgs } from "../../globals/globalData";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";
import Stories from "../Home/comps/stories";

export default function Profile({ navigation, route }) {
  const [images, setImages] = useState(null);
  function chunk(arr, n) {
    return arr.slice(0, ((arr.length + n - 1) / n) | 0).map(function (c, i) {
      return arr.slice(n * i, n * i + n);
    });
  }

  useEffect(() => {
    setImages(chunk(imgs, 3));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SvgUri
            style={styles.barIcons}
            source={require("../../Images/privateIcon.svg")}
          />
          <Text style={{ fontWeight: "bold" }}> jacob_w</Text>
          <SvgUri
            style={styles.barIcons}
            source={require("../../Images/accountsList.svg")}
          />
        </View>
        <SvgUri
          style={styles.barIcons}
          source={require("../../Images/Menu.svg")}
        />
      </View>

      <View style={styles.profileSec}>
        <Image
          style={styles.profileImg}
          source={require("../../Images/img1.jpg")}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.followCounts}>54</Text>
          <Text>Posts</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.followCounts}>834</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.followCounts}>162</Text>
          <Text>Following</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.name}>jacob west</Text>
        <Text style={styles.status}>
          Digital goodies designer @pixsellz {"\n"}
          Everything is designed.
        </Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.name}>
          {route.params.isMine ? "Edit Profile" : "Follow"}
        </Text>
      </TouchableOpacity>
      <Stories />
      <ScrollView>
        <View>
          {images !== null ? (
            images.map((img) => {
              return (
                <View style={{ flexDirection: "row" }}>
                  {img.map((item) => {
                    return <Image style={styles.postImgs} source={item} />;
                  })}
                </View>
              );
            })
          ) : (
            <Text>Loading..</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
