import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppTextInput from "../reusableComponents/AppTextInput";
import AppButton from "../reusableComponents/AppButton";

function LogInScreen() {
  return (
    <View>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppTextInput
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete={false}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        icon="account-lock"
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"
      />
      <AppButton name="login" color="secondaryColor" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LogInScreen;
