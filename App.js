import ImageInput from "./app/reusableComponents/ImageInput";
import Screen from "./app/reusableComponents/Screen";
import * as ImagePicker from "expo-image-picker";
import { FlatList } from "react-native";

import react, { useState, useEffect } from "react";
export default function App() {
  const [permission, setPermission] = useState(false);
  const [imageUri, setImageUri] = useState([]);

  const askForPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) return alert("You need to permit media permission");

    setPermission(granted);
  };

  useEffect(() => {
    askForPermission();
  }, []);

  return (
    <Screen>
      <FlatList />
      {/* <ImageInput
        imageUri={imageUri}
        permission={permission}
        setImageUri={setImageUri}
      /> */}
    </Screen>
  );
}
