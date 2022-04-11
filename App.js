import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import * as appColor from "./app/config/appColors";
import Card from "./app/reusableComponents/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ViewImageScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <Card /> */}
      <ListingDetailsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
