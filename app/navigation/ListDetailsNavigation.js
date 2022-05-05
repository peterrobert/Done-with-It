import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="listings">
      <Stack.Screen
        name="listings"
        component={ListingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="listDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
