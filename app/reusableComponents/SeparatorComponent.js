import React from "react";
import { View, StyleSheet } from "react-native";
import * as appColor from "../config/appColors";

function SeparatorComponent() {
  return <View style={styles.separtatorContainer} />;
}

const styles = StyleSheet.create({
  separtatorContainer: {
    width: "100%",
    backgroundColor: appColor.grey,
    height: 1,
  },
});

export default SeparatorComponent;
