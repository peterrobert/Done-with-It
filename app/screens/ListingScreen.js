import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, Button } from "react-native";
import { getListings } from "../api/listings";
import useApi from "../hooks/useApi";
import Appactivityindicator from "../reusableComponents/AppActivityIndicator";

import Card from "../reusableComponents/Card";
import Screen from "../reusableComponents/Screen";

function ListingScreen({ navigation }) {
  const {
    data: listings,
    loading,
    error,
    request: populateListings,
  } = useApi(getListings);

  useEffect(() => {
    populateListings();
  }, []);

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
      {loading === true ? (
        <Appactivityindicator
          visible={loading}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
      ) : (
        <FlatList
          data={listings}
          renderItem={renderListItems}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {error === true ? (
        <View style={styles.errorMessage}>
          <Text style={styles.tryButton}>
            There was a problem getting the listings
          </Text>
          <Button
            title="Try again"
            color="#841584"
            onPress={() => populateListings()}
          />
        </View>
      ) : null}
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
