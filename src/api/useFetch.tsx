import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url: string, city: any): any {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url, city]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}
