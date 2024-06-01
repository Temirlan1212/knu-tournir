import { formatISODateToDDMMYYYY } from "@/shared/lib/helpers/date";
import { Payment } from "@/shared/types/global";
import { ColumnDef } from "@tanstack/react-table";
import { StatusCard } from "./payments-table-data";

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Количество</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("amount")}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Статус</div>,
    cell: ({ row }) => {
      return (
        <div className="flex w-full justify-end">
          <StatusCard status={row.getValue("status")} />
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-right">Создано</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {formatISODateToDDMMYYYY(row.getValue("created_at"))}
        </div>
      );
    },
  },
  {
    accessorKey: "updated_at",
    header: () => <div className="text-right">Обнавлено</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {formatISODateToDDMMYYYY(row.getValue("updated_at"))}
        </div>
      );
    },
  },
];

export default columns;
