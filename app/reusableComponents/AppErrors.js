import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as appColors from "../config/appColors";

function AppErrors({ children }) {
  if (!children) return null;
  return (
    <View style={styles.errorsContainer}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorsContainer: {
    marginBottom: 2,
  },
  textContainer: {
    color: appColors.secondaryColor,
    fontWeight: "bold",
  },
});

export default AppErrors;
