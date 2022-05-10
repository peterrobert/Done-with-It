import React, { useState } from "react";

const useApi = (apiMethod) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, isLoading] = useState(false);

  const request = async (...args) => {
    isLoading(true);
    const response = await apiMethod(...args);
    isLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useApi;
