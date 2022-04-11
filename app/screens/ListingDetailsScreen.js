import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as appColor from "../config/appColors";

function ListingDetailsScreen() {
  return (
    <View style={styles.listingContainer}>
      <View>
        <Image
          source={require("../assets/jacket.jpg")}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <View style={styles.priceContainer}>
          <Text style={styles.ItemName}> Red Jacket for sale</Text>
          <Text style={styles.itemPrice}> $ 500</Text>
        </View>
        <View style={styles.sellersInfo}>
          <Image
            source={require("../assets/mosh.jpg")}
            style={styles.sellerImage}
          />
          <View style={styles.sellerName}>
            <Text style={styles.actualName}>Mosh Hamedani</Text>
            <Text style={styles.numberOfListings}>5 listings</Text>
          </View>
        </View>
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
  sellersInfo: {
    flexDirection: "row",
    marginTop: 50,
    paddingLeft: 20,
  },
  sellerImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  sellerName: {
    paddingLeft: 10,
    paddingTop: 15,
  },
  actualName: {
    fontSize: 15,
    color: appColor.black,
    fontWeight: "600",
  },
  numberOfListings: {
    fontSize: 14,
    color: appColor.grey,
    fontWeight: "bold",
    paddingTop: 10,
  },
});

export default ListingDetailsScreen;
