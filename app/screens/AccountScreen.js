import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../reusableComponents/ListItem";
import * as appColor from "../config/appColors";
import { MaterialIcons } from "@expo/vector-icons";
import Screen from "../reusableComponents/Screen";
import { AuthContext } from "../auth/context";
import { removeToken } from "../api/storage";

function AccountScreen({ navigation }) {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleLogOut = () => {
    setCurrentUser(null);
    removeToken();
  };

  return (
    <>
      <Screen>
        <View style={styles.accountContainer}>
          <ListItem
            title={currentUser.name}
            subTitle={currentUser.email}
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
