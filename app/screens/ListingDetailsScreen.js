import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as appColor from "../config/appColors";
import ListItem from "../reusableComponents/ListItem";

function ListingDetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.listingContainer}>
      <View>
        <Image
          source={item.image}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <View style={styles.priceContainer}>
          <Text style={styles.ItemName}> {item.productName}</Text>
          <Text style={styles.itemPrice}> {item.price}</Text>
        </View>
        <ListItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listingContainer: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 250,
  },
  priceContainer: {
    paddingLeft: 20,
    marginTop: 10,
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

export default ListingDetailsScreen;
