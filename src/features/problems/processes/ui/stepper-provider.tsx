"use client";
import { steps } from "../model/constants/steps";
import { StepperProvider } from "@/shared/ui/stepper/context";
import { PropsWithChildren } from "react";

export default function StepperProviderComponent({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col gap-4">
      <StepperProvider
        value={{
          steps: steps,
          initialStep: 0,
          responsive: false,
          variant: "line",
          orientation: "horizontal",
          clickable: true,
        }}
      >
        {children}
      </StepperProvider>
    </div>
  );
}
