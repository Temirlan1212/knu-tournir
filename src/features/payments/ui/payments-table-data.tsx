export const statuses = [
  { label: "Выберите статус", value: "default" },
  { label: "В ожидании", value: "pending" },
  { label: "Завершен", value: "completed" },
  { label: "Ошибка", value: "failed" },
  { label: "Отменен", value: "cancelled" },
];

export type Status = "pending" | "completed" | "failed" | "cancelled";

export const getStatusColor = (status: Status) => {
  switch (status) {
    case "pending":
      return "bg-yellow-500/80 text-slate-900";
    case "completed":
      return "bg-green-500/80 text-slate-900";
    case "failed":
      return "bg-red-500/80 text-slate-900";
    case "cancelled":
      return "bg-gray-500/80 text-slate-900";
    default:
      return "bg-gray-200/80 text-slate-800";
  }
};

export const StatusCard = ({ status }: { status: Status }) => {
  return (
    <div className={`p-2 rounded-xl w-[fit-content] ${getStatusColor(status)}`}>
      <span className="font-bold">{status}</span>
    </div>
  );
};
