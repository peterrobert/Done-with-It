import apiClient from "./client";

const logIn = (email, password) => {
  return apiClient.post("/auth", { email, password });
};

const signUp = (name, email, password) => {
  return apiClient.post("/users", { name, email, password });
};

export { logIn, signUp };
