import React from "react";
import LottieView from "lottie-react-native";

const Appactivityindicator = ({ visible = false }) => {
  if (visible === false) return null;
  return (
    <LottieView
      source={require("../assets/aminations/loader.json")}
      loop
      autoPlay
    />
  );
};

export default Appactivityindicator;
