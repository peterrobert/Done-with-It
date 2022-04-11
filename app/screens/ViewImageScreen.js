import React from "react";
import { StyleSheet, View, Image } from "react-native";
import * as appColor from "../config/appColors";
import { MaterialIcons } from "@expo/vector-icons";

function ViewImageScreen() {
  return (
    <View style={styles.viewImageConatiner}>
      <View style={styles.buttonContainer}>
        <MaterialIcons
          name="cancel"
          size={30}
          color={`${appColor.white}`}
          style={styles.cancelIcon}
        />
        <MaterialIcons
          name="delete-sweep"
          size={30}
          color={`${appColor.white}`}
          style={styles.nextIcon}
        />
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
    backgroundColor: appColor.black,
  },

  buttonContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 20,
  },

  cancelIcon: {
    left: -70,
  },

  nextIcon: {
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
