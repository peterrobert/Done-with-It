import React from "react";
import { StyleSheet, View, Image } from "react-native";

function ViewImageScreen() {
  return (
    <View style={styles.viewImageConatiner}>
      <View style={styles.buttonContainer}>
        <View style={styles.cancelIcon}></View>
        <View style={styles.nextIcon}></View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/chair.jpg")}
          resizeMode="contain"
          style={styles.imageContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewImageConatiner: {
    flex: 1,
    backgroundColor: "#000",
  },

  buttonContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 20,
  },

  cancelIcon: {
    backgroundColor: "#fc5c65",
    height: 40,
    width: 60,
    left: -70,
  },

  nextIcon: {
    backgroundColor: "#4ECDC4",
    height: 40,
    width: 60,
    right: -70,
  },

  imageContainer: {
    flex: 3.5,
  },
  imageContent: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
