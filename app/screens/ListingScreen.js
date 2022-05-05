import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "../reusableComponents/Card";
import Screen from "../reusableComponents/Screen";
function ListingScreen({ navigation }) {
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
      price: "500$",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 3,
      productName: "A red jacket",
      price: "600$",
      image: require("../assets/jacket.jpg"),
    },
  ];
  const renderListItems = ({ item }) => {
    return (
      <Card
        title={item.productName}
        subTitle={item.price}
        image={item.image}
        onPress={() => navigation.navigate("listDetails", { item })}
      />
    );
  };
  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderListItems}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
}

export default ListingScreen;
