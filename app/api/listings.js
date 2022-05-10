import apiClient from "./client";

const endPoint = "./listings";

const getListings = () => {
  return apiClient.get(endPoint);
};
const postListing = (data) => {
  return apiClient.post(endPoint, data);
};

export { getListings, postListing };
