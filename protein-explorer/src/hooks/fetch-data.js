import { useState, useEffect } from "react";

export const useFetchData = (promise) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!promise) return;

    promise
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [promise]);

  return { loading, data, error };
};
