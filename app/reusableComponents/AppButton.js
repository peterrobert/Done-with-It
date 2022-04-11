import React from "react";
import { Text, View, StyleSheet } from "react-native";

function AppButton({ name }) {
  return (
    <View>
      <View style={name === "login" ? styles.loginButton : styles.signupButton}>
        <Text style={styles.loginText}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupButton: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 50,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

export default AppButton;
