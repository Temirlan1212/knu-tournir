export type ServerTimestampt = { createdAt: string; updatedAt: string };
export type Payment = {
  label: string;
  id: string;
} & ServerTimestampt;
