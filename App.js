import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator, AuthNavigator } from "./app/navigation";
import ListEditScreen from "./app/screens/ListEditScreen";
import { AuthContext } from "./app/auth/context";
import { getToken } from "./app/api/storage";
import jwt_decode from "jwt-decode";

import AppLoading from "expo-app-loading";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const checkToken = async () => {
    const results = await getToken();
    if (!results) return;

    setCurrentUser(jwt_decode(results));
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={checkToken}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("an error occured")}
      />
    );

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavigationContainer>
        {currentUser !== null ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
