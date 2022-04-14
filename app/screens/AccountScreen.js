import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListItem from "../reusableComponents/ListItem";
import * as appColor from "../config/appColors";
import { MaterialIcons } from "@expo/vector-icons";
function AccountScreen() {
  const handleLogOut = () => {
    console.log("logOut");
  };

  return (
    <>
      <View style={styles.accountContainer}>
        <ListItem
          title={"Mosh Hamedani"}
          subTitle={"pwambui93@gmail.com"}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.listContainer}>
        <ListItem
          title={"My Listings"}
          icon={
            <MaterialIcons
              name="format-list-bulleted"
              size={25}
              color="black"
            />
          }
        />

        <ListItem
          title={"My Messages"}
          icon={<MaterialIcons name="email" size={25} color="black" />}
        />
      </View>

      <View style={styles.logOutConatiner}>
        <ListItem
          title={"Log Out"}
          icon={<MaterialIcons name="logout" size={25} color="black" />}
          onPress={handleLogOut}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  accountContainer: {
    backgroundColor: appColor.lightGrey,
    paddingBottom: 10,
  },

  listContainer: {
    backgroundColor: appColor.lightGrey,
    paddingBottom: 10,
    marginTop: 30,
  },
  logOutConatiner: {
    backgroundColor: appColor.lightGrey,
    paddingBottom: 10,
    marginTop: 30,
  },
});

export default AccountScreen;
