"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const getAccounts = async () => {
    // const { amount, created_at, status } = body;

    const res = await fetch(`/api/payments`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: "", created_at: "", status: "" }),
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
