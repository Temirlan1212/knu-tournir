"use client";

import { DataTable, DebounceSearch } from "@/shared/ui/data-table";
import { useEffect, useState } from "react";
import columns from "./payments-table-columns";
import SectionBuilderWrapper from "@/widgets/section-builder-wrapper";
import { Button } from "@/shared/ui/button";
import { LoadingStatus } from "@/shared/lib/types/loading";

const statuses = ["pending", "completed", "failed", "cancelled"];

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<LoadingStatus>("init");
  const getAccounts = async () => {
    setLoading("loading");
    try {
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
    } catch (error) {
    } finally {
      setLoading("loaded");
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  console.log(data);

  return (
    <div className="w-full">
      <SectionBuilderWrapper
        title="Транзакции"
        slots={{
          titleRightBlock: (
            <Button variant="ghost" loading={loading === "loading"} />
          ),
        }}
      >
        <DataTable
          data={data}
          columns={[...columns]}
          slots={{
            headerLeftBlock: (table) => (
              <div className="flex gap-3 flex-wrap">
                <div className="flex flex-col gap-2 grow">
                  <p>Поиск по названию</p>
                  <DebounceSearch
                    debounceDelay={500}
                    // onDebounceChange={(title) =>
                    //   fetchFormula({ ...query, title })
                    // }
                  />
                </div>
                <div className="flex flex-col gap-2 grow">
                  <p>Поиск по описанию</p>
                  <DebounceSearch
                    debounceDelay={500}
                    // onDebounceChange={(description) =>
                    //   fetchFormula({ ...query, description })
                    // }
                  />
                </div>
                <div className="flex flex-col gap-2 grow">
                  <p>Поиск по формуле</p>
                  <DebounceSearch
                    debounceDelay={500}
                    // onDebounceChange={(latex) =>
                    //   fetchFormula({ ...query, latex })
                    // }
                  />
                </div>
              </div>
            ),
            headerRightBlock: (table) => <></>,
          }}
        />
      </SectionBuilderWrapper>
    </div>
  );
}
