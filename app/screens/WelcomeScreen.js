import React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import AppButton from "../reusableComponents/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.imageContainer}
      blurRadius={4}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Sell what you dont need</Text>
      </View>
      <AppButton name={"Log in"} color="secondaryColor" />
      <AppButton name={"Register"} color="primaryColor" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },

  logoImage: {
    width: 100,
    height: 100,
    top: 50,
    marginBottom: 80,
  },
  logoText: {
    textTransform: "capitalize",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
