// import expo gestures for swipping
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import * as appColor from "./app/config/appColors";
import Card from "./app/reusableComponents/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/reusableComponents/AppTextInput";
import AppPicker from "./app/reusableComponents/AppPicker";
import Screen from "./app/reusableComponents/Screen";

const categoriesData = [
  {
    id: 1,
    category: "funiture",
  },
  {
    id: 2,
    category: "Clothes",
  },
  {
    id: 3,
    category: "Electronics",
  },
];

export default function App() {
  return (
    <Screen>
      {/* <ViewImageScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <Card /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <MessageScreen /> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
      {/* <AppTextInput /> */}
      <AppPicker
        placeholder={"Categories"}
        icon={"apps"}
        items={categoriesData}
      />
    </Screen>
  );
}
