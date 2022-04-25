import AppFormPicker from "./app/reusableComponents/AppFormPicker";
import Screen from "./app/reusableComponents/Screen";
import ListEditScreen from "./app/screens/ListEditScreen";
import LogInScreen from "./app/screens/LogInScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <Screen>
      {/* <RegisterScreen /> */}
      {/* <LogInScreen /> */}
      {<ListEditScreen />}
      {/* <AppFormPicker /> */}
    </Screen>
  );
}
