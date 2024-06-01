"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const getAccounts = async () => {
    const res = await fetch(`/api/accounts`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (data?.data) setData(data?.data);
      return data?.data;
    }
    return null;
  };

  useEffect(() => {
    getAccounts();
  }, []);

  console.log(data);

  return <>table</>;
}
