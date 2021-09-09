import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { styles } from "./Style";
import { dimensions, colors, padding, fonts } from "../../globals/globalStyle";
import SvgUri from "react-native-svg-uri";

export default function SignUp({ navigation }) {
  const [data, setData] = useState({
    userName: "",
    email: "",
    pass: "",
  });
  const [valid, setValid] = useState({
    userName: null,
    email: null,
    pass: null,
  });

  const validateUsername = (username) => {
    if (username === "") {
      return false;
    } else {
      return true;
    }
  };
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
            placeholder="Username"
            value={data.userName}
            onChangeText={(text) => {
              setData({ ...data, ["userName"]: text });
              if (validateUsername(text)) {
                setValid({ ...valid, ["userName"]: true });
                console.log(valid.userName);
              } else {
                setValid({ ...valid, ["userName"]: false });
                console.log(valid.userName);
              }
            }}
          />
          {valid.userName === true || valid.userName === null ? null : (
            <Text style={{ fontSize: fonts.sm, color: "red", marginTop: -8 }}>
              Username is not valid
            </Text>
          )}

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
        </ScrollView>
        {/* <TouchableOpacity style={styles.forgotPass}>
        <Text style={styles.loginText}>Forgot password?</Text>
      </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (valid.email && valid.pass && valid.userName === true) {
              navigation.navigate("Tabs");
            } else {
              alert("please provide proper details");
            }
          }}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fbLogin}>
          <SvgUri source={require("../../Images/facebookIcon.svg")} />
          <Text style={styles.fbText}>Sign up with facebook</Text>
        </TouchableOpacity>
        <SvgUri
          style={styles.seperator}
          source={require("../../Images/Seperator.svg")}
        />
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.optionText}>
            Already have an account?{" "}
            <Text style={styles.loginText}> Log in </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
