import { useEffect, useState } from "react";

export const useDebounce = (search: string) => {
  const [value, setValue] = useState(search);

  useEffect(() => {
    const DEBOUNCE_DELAY = 500;
    const timer = setTimeout(() => {
      setValue(search);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  return value;
};
