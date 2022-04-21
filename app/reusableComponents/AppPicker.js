import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as appColor from "../config/appColors";
import { TouchableWithoutFeedback } from "react-native";
import PickerItem from "./PickerItem";

function AppPicker({ icon, placeholder, items, setCategory, ...otherProps }) {
  const [showModal, setShowModal] = useState(false);
  const renderItem = ({ item }) => (
    <PickerItem
      name={item.category}
      onPress={() => {
        setCategory(item.category);
        setShowModal(false);
      }}
    />
  );

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
          <Text style={styles.input}>{placeholder}</Text>

          <MaterialCommunityIcons
            name="arrow-down-bold-circle"
            size={25}
            color={appColor.grey}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={showModal}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <MaterialCommunityIcons
            name="close"
            size={25}
            color={appColor.grey}
            style={[styles.icon, styles.closeButton]}
          />
        </TouchableWithoutFeedback>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
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
  closeButton: {
    textAlign: "right",
    paddingRight: 25,
  },
});

export default AppPicker;
