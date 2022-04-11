import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as appColor from "../config/appColors";

function AppButton({ name, color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          name === "login" ? styles.loginButton : styles.signupButton,
          { backgroundColor: appColor[color] },
        ]}
      >
        <Text style={styles.loginText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signupButton: {
    width: "100%",
    height: 50,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 5,
  },
  loginButton: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 5,
  },
  loginText: {
    color: appColor.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AppButton;
