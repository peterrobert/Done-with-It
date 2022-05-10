import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator, AuthNavigator } from "./app/navigation";
import ListEditScreen from "./app/screens/ListEditScreen";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <ListEditScreen /> */}
    </NavigationContainer>
  );
}
