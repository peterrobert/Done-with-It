import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "../reusableComponents/Card";
function ListingScreen() {
  const data = [
    {
      id: 1,
      productName: "A red jacket",
      price: "200$",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      productName: "A red jacket",
      price: "200$",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 3,
      productName: "A red jacket",
      price: "200$",
      image: require("../assets/jacket.jpg"),
    },
  ];
  const renderListItems = ({ item }) => {
    return (
      <Card title={item.productName} subTitle={item.price} image={item.image} />
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderListItems}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default ListingScreen;
