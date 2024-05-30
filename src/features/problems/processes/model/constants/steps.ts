import { StepItem } from "@/shared/ui/stepper";

export const steps = [
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
] satisfies StepItem[];

export const stepIndexes = {
  first: 0,
  second: 1,
  third: 2,
} as const;
