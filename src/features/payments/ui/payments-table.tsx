"use client";

import { DataTable, DebounceSearch } from "@/shared/ui/data-table";
import { useEffect, useState } from "react";
import columns from "./payments-table-columns";
import SectionBuilderWrapper from "@/widgets/section-builder-wrapper";
import { Button } from "@/shared/ui/button";
import { LoadingStatus } from "@/shared/lib/types/loading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { statuses } from "./payments-table-data";

type Queries = {
  amount: string;
  created_at: string;
  status: string;
};

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<LoadingStatus>("init");
  const [queries, setQueries] = useState<Queries>({
    amount: "",
    created_at: "",
    status: "",
  });

  const getAccounts = async () => {
    setLoading("loading");

    try {
      const res = await fetch(`/api/payments`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...queries }),
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
    setQueries({ amount: "", created_at: "", status: "" });
  }, []);

  useEffect(() => {
    getAccounts();
  }, [queries]);

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
              <div className="flex gap-3 flex-wrap justify-between">
                <div className="flex flex-col gap-2 grow">
                  <p>Поиск по количеству</p>
                  <DebounceSearch
                    debounceDelay={500}
                    placeholder="Количество"
                    type="number"
                    onDebounceChange={(v) =>
                      setQueries((prev) => {
                        return { ...prev, amount: v };
                      })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2 grow">
                  <p>Дата создания</p>
                  <DebounceSearch
                    placeholder="Дата создания"
                    debounceDelay={500}
                    onDebounceChange={(v) =>
                      setQueries((prev) => {
                        return { ...prev, created_at: v };
                      })
                    }
                  />
                </div>
              </div>
            ),
            headerRightBlock: (table) => (
              <>
                <div className="flex flex-col gap-2 grow">
                  <p>Статус транзакции</p>
                  <Select
                    onValueChange={(v) => {
                      setQueries((prev) => {
                        return { ...prev, status: v === "default" ? "" : v };
                      });
                    }}
                  >
                    <SelectTrigger className="p-[23px]">
                      <SelectValue placeholder="Выберите статус" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map(({ value, label }, index) => (
                        <SelectItem key={index} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            ),
          }}
        />
      </SectionBuilderWrapper>
    </div>
  );
}
