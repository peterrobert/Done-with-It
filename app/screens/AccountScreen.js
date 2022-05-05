import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import ListItem from "../reusableComponents/ListItem";
import * as appColor from "../config/appColors";
import { MaterialIcons } from "@expo/vector-icons";
import Screen from "../reusableComponents/Screen";
function AccountScreen({ navigation }) {
  const handleLogOut = () => {
    console.log("logOut");
  };

  return (
    <>
      <Screen>
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
            onPress={() => navigation.navigate("messages")}
          />
        </View>

        <View style={styles.logOutConatiner}>
          <ListItem
            title={"Log Out"}
            icon={<MaterialIcons name="logout" size={25} color="black" />}
            onPress={handleLogOut}
          />
        </View>
      </Screen>
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
