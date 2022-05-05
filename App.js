import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator, AuthNavigator } from "./app/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
