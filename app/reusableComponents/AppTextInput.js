import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as appColor from "../config/appColors";

// ===This is supposed to be shared
import { useFonts } from "expo-font";

function AppTextInput({ icon, ...otherProps }) {
  const [loaded] = useFonts({
    robotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={appColor.grey}
          style={styles.icon}
        />
      )}
      <TextInput
        {...otherProps}
        style={[styles.input, { fontFamily: "robotoMedium" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    backgroundColor: appColor.lightGrey,
    borderRadius: 20,
    width: "100%",
    marginBottom: 10,
  },
  input: {
    height: 25,
    margin: 10,
    color: appColor.black,
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "500",
  },
  icon: {
    marginTop: 10,
  },
});

export default AppTextInput;
