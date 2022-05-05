import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListEditScreen from "../screens/ListEditScreen";
import AccountNavigation from "./AccountNavigation";
import HomeNavigation from "./ListDetailsNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({}) => {
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={ListEditScreen}
        options={{
          tabBarIcon: ({}) => {
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons name="plus" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarIcon: ({}) => {
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name="card-account-details"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
