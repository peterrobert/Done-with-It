import * as SecureStore from "expo-secure-store";

const key = "authToken";

const saveToken = async (value) => {
  try {
    return await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log("The token is not saved succesfully", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Cannot retrieve token", error);
  }
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Cannot remove token", error);
  }
};

export { saveToken, getToken, removeToken };
