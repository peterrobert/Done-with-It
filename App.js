import Screen from "./app/reusableComponents/Screen";
import LogInScreen from "./app/screens/LogInScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <Screen>
      <RegisterScreen />
      {/* <LogInScreen /> */}
    </Screen>
  );
}
