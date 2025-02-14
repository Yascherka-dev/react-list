import { useState, useEffect } from "react";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    fetch(url, { ...options, signal })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des données");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url, options]);

  return { data, loading, error };
}

export default useFetch;
