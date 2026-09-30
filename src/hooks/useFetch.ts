import { useEffect, useState } from "react";
import type { Country } from "../types/types";

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Country[] | []>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Request is failed ${response.status}`);
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error(error);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, setData, loading, error };
};
