import React from "react";
// This is a picker component... Just like a drop down.
import { View, StyleSheet } from "react-native";
import AppTextInput from "./AppTextInput";

function AppPicker() {
  return (
    <View>
      <AppTextInput icon="apps" value="categories" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AppPicker;
