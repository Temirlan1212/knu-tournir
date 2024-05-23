import { StepItem } from "@/shared/ui/stepper";

export const steps = [
  { label: "Аккаунт" },
  { label: "Создание проекта" },
  { label: "Проблемы" },
  { label: "Диагностика" },
  { label: "Завершение" },
] satisfies StepItem[];

export const stepIndexes = {
  first: 0,
  second: 1,
  third: 2,
} as const;
