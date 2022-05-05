import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="accountDetails">
      <Stack.Screen
        name="accountDetails"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="messages" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
