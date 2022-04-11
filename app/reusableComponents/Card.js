import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as appColor from "../config/appColors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={image} resizeMode="cover" style={styles.cardImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.ItemName}> {title}</Text>
          <Text style={styles.itemPrice}> {subTitle}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardContainer: {
    width: "100%",
    minHeight: 350,
    backgroundColor: appColor.white,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 250,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  contentContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },
  ItemName: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
  itemPrice: {
    marginTop: 10,
    color: appColor.primaryColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Card;
