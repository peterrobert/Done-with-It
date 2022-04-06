import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

function LoginScreen() {
  return (
    <View style={styles.loginContainer}>
      <Text>This is the log in screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 10,
    color: "#000",
  },
});

export default LoginScreen;
