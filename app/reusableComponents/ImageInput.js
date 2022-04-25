import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as appColors from "../config/appColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, permission, setImageUri }) {
  const getMedia = async () => {
    if (!permission) return alert("You need to permit media permission");
    try {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
      if (cancelled) return;

      setImageUri(uri);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainContainer}>
      {imageUri !== null ? (
        <TouchableWithoutFeedback onPress={console.log("pressed")}>
          <Image style={styles.imageContainer} source={{ uri: imageUri }} />
        </TouchableWithoutFeedback>
      ) : null}
      <TouchableWithoutFeedback onPress={getMedia}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="camera"
            size={30}
            color={appColors.grey}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    padding: 10,
  },
  container: {
    width: 80,
    height: 80,
    backgroundColor: appColors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  imageContainer: {
    width: 80,
    height: 80,
    paddingLeft: 0,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
  },
});

export default ImageInput;
