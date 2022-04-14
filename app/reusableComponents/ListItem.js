import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import * as appColor from "../config/appColors";

function ListItem({ title, subTitle, image, onPress, renderLeftActions }) {
  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <TouchableHighlight onPress={onPress} underlayColor={appColor.lightGrey}>
        <View style={styles.sellersInfo}>
          <Image source={image} style={styles.sellerImage} />
          <View style={styles.sellerName}>
            <Text style={styles.actualName}>{title}</Text>
            <Text style={styles.numberOfListings}>{subTitle} </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  sellersInfo: {
    flexDirection: "row",
    marginTop: 10,
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

export default ListItem;
