import React from "react";
import { View, Text, FlatList } from "react-native";
import ListItem from "../reusableComponents/ListItem";
import SeparatorComponent from "../reusableComponents/SeparatorComponent";

const data = [
  {
    id: 1,
    title: "t1",
    descrption: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t1",
    descrption: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "t1",
    descrption: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "t1",
    descrption: "d1",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen() {
  const onPress = () => {
    console.log("This touched");
  };

  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        subTitle={item.descrption}
        image={item.image}
        onPress={onPress}
        renderRightActions={() => {
          return <View style={{ backgroundColor: "red", width: 70 }}></View>;
        }}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <SeparatorComponent />}
    />
  );
}

export default MessageScreen;
