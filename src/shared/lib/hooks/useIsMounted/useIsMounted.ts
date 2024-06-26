import { useEffect, useState } from "react";

export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false); // unmounted by default

  useEffect(() => {
    setIsMounted(true); // mounted

    return () => {
      setIsMounted(false); // unmounted
    };
  }, []); // run once on mount

  return { isMounted }; // return function that checks mounted status
}
