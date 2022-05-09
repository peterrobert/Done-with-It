import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, Button } from "react-native";
import { getListings } from "../api/listings";

import Card from "../reusableComponents/Card";
import Screen from "../reusableComponents/Screen";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    populateListings();
  }, []);

  const populateListings = async () => {
    const response = await getListings;
    console.log(response);

    // if (!response.ok) {
    //   setError(true);
    //   return;
    // }

    // setError(false);
    setListings(response.data);
  };

  const renderListItems = ({ item }) => {
    return (
      <Card
        title={item.title}
        subTitle={item.price}
        image={{ uri: item.images[0].url }}
        onPress={() => navigation.navigate("listDetails", { item })}
      />
    );
  };
  return (
    <Screen>
      {error === true ? (
        <View style={styles.errorMessage}>
          <Text style={styles.tryButton}>
            There was a problem getting the listings
          </Text>
          <Button
            title="Try again"
            color="#841584"
            onPress={populateListings}
          />
        </View>
      ) : null}
      <FlatList
        data={listings}
        renderItem={renderListItems}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  tryButton: {
    marginBottom: 20,
  },
});

export default ListingScreen;
