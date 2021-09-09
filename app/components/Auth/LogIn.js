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
import { styles } from "./Style";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";

export default function LogIn({ navigation }) {
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const [valid, setValid] = useState({
    email: null,
    pass: null,
  });

  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const validatePass = (pass) => {
    if (pass.length > 7) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.backIcon}>
          <SvgUri source={require("../../Images/Back.svg")} />
        </View>
        <View style={styles.instaIcon}>
          <SvgUri source={require("../../Images/Instagram_logo.svg")} />
        </View>
        <ScrollView style={styles.formView} keyboardShouldPersistTaps="handled">
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={data.email}
            onChangeText={(text) => {
              setData({ ...data, ["email"]: text });
              if (validateEmail(text)) {
                setValid({ ...valid, ["email"]: true });
              } else {
                setValid({ ...valid, ["email"]: false });
              }
            }}
          />
          {valid.email === true || valid.email === null ? null : (
            <Text style={{ fontSize: fonts.sm, color: "red", marginTop: -8 }}>
              Email is not right
            </Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={data.pass}
            onChangeText={(text) => {
              setData({ ...data, ["pass"]: text });
              if (validatePass(text)) {
                setValid({ ...valid, ["pass"]: true });
              } else {
                setValid({ ...valid, ["pass"]: false });
              }
            }}
          />
          {valid.pass === true || valid.pass === null ? null : (
            <Text style={{ fontSize: fonts.sm, color: "red", marginTop: -8 }}>
              Password should be 7 character long
            </Text>
          )}
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.loginText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (valid.email && valid.pass === true) {
                navigation.navigate("Tabs");
              } else {
                alert("please provide proper details");
              }
            }}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fbLogin}>
            <SvgUri source={require("../../Images/facebookIcon.svg")} />
            <Text style={styles.fbText}>Log in with facebook</Text>
          </TouchableOpacity>
        </ScrollView>

        <SvgUri
          style={styles.seperator}
          source={require("../../Images/Seperator.svg")}
        />
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.optionText}>
            Don't have an account?{" "}
            <Text style={styles.loginText}> Sign up </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
