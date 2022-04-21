import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as appColor from "../config/appColors";

function AppTextInput({ icon, ...otherProps }) {
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
      <TextInput {...otherProps} style={styles.input} />
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
    marginBottom: 10,
  },
  input: {
    height: 25,
    margin: 10,
    color: appColor.black,
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "500",
    width: "100%",
  },
  icon: {
    marginTop: 10,
  },
});

export default AppTextInput;
