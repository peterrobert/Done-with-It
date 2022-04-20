import React from "react";
import { TouchableHighlight, StyleSheet, View, Text } from "react-native";
import * as appColors from "../config/appColors";

function PickerItem({ onPress, name }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={appColors.light}>
      <View style={styles.container}>
        <Text style={styles.nameContainer}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  nameContainer: {
    color: appColors.black,
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default PickerItem;
