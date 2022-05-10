import apiClient from "./client";

const logIn = (email, password) => {
  return apiClient.post("/auth", { email, password });
};

export { logIn };
