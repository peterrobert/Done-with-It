import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import * as appColors from "../config/appColors";

function Screen({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
