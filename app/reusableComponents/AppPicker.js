import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as appColor from "../config/appColors";

// ===This is supposed to be shared
import { useFonts } from "expo-font";
import { TouchableWithoutFeedback } from "react-native";

function AppPicker({ icon, placeholder, ...otherProps }) {
  const [showModal, setShowModal] = useState(false);
  const [loaded] = useFonts({
    robotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={appColor.grey}
              style={styles.icon}
            />
          )}
          <Text style={[styles.input, { fontFamily: "robotoMedium" }]}>
            {placeholder}
          </Text>

          <MaterialCommunityIcons
            name="arrow-down-bold-circle"
            size={25}
            color={appColor.grey}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        visible={showModal}
        style={styles.modalConatiner}
      >
        <Button title="Click me to close" onPress={() => setShowModal(false)} />
      </Modal>
    </>
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
    flex: 1,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  modalConatiner: {
    flex: 1,
  },
});

export default AppPicker;
