import React, { useState, useEffect } from "react";
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
import { styles } from "./exploreStyle";
import { feedData, imgs } from "../../globals/globalData";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";

export default function Explore({ navigation }) {
  const [images, setImages] = useState(null);
  function chunk(arr, n) {
    return arr.slice(0, ((arr.length + n - 1) / n) | 0).map(function (c, i) {
      return arr.slice(n * i, n * i + n);
    });
  }

  useEffect(() => {
    setImages(chunk(imgs, 12));
    // console.log(images[1].length);
  }, []);
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        alignItems: "center",
        marginTop: padding.sl,
      }}
    >
      <TextInput
        style={{
          height: 36,
          width: "90%",
          borderWidth: 0.5,
          borderRadius: 4,
          backgroundColor: "#FAFAFA",
          padding: 10,
          marginVertical: padding.md,
        }}
        placeholder={"Search"}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        {images !== null
          ? images.map((img) => {
              return (
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Image style={styles.exploreImgs} source={img[0]} />
                      <Image style={styles.exploreImgs} source={img[1]} />
                    </View>

                    <Image style={styles.bigImgs} source={img[2]} />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    {img.slice(3, 6).map((item) => {
                      return <Image style={styles.exploreImgs} source={item} />;
                    })}
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    {img.slice(6, 9).map((item) => {
                      return <Image style={styles.exploreImgs} source={item} />;
                    })}
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Image style={styles.bigImgs} source={img[9]} />
                    <View>
                      <Image style={styles.exploreImgs} source={img[10]} />
                      <Image style={styles.exploreImgs} source={img[11]} />
                    </View>
                  </View>
                </View>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
}
