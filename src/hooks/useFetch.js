import { useState, useEffect, useCallback } from "react";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const fetchData = useCallback(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let isMounted = true;

    setLoading(true);
    setError(null);
    setData(null);

    fetch(url, { ...options, signal })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des données");
        return res.json();
      })
      .then((data) => {
        if (isMounted) setData(data);
      })
      .catch((error) => {
        if (isMounted && error.name !== "AbortError") {
          setError(error.message);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, options, refreshIndex]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => setRefreshIndex((prev) => prev + 1);

  return { data, loading, error, refetch };
}

export default useFetch;
