import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.100.78:9000/api",
});

export default apiClient;
