import React from "react";
import { View, StyleSheet } from "react-native";
import * as appColor from "../config/appColors";

function SeparatorComponent() {
  return <View style={styles.separtatorContainer} />;
}

const styles = StyleSheet.create({
  separtatorContainer: {
    borderBottomColor: appColor.grey,
    borderStyle: "solid",
    borderWidth: 0.5,
  },
});

export default SeparatorComponent;
