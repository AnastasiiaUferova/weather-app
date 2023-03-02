import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(url: string): any {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState<any>(null);

 /* const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url)
      const result = await response.json();
      setData(result);
      setLoading(false);
    }

    catch(error) {
      setError(error);
      setLoading(false);
    }
  }*/

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
