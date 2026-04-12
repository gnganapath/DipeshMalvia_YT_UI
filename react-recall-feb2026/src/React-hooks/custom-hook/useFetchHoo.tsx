// 8. useFetch Hook
// Exchanging data over the web? The useFetch hook simplifies those API calls. 
// It's great for data fetching with minimal fuss, helping you build clean and reliable data interactions in your apps.

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

//Usage:

const { data, loading, error } = useFetch("https://api.example.com/data");