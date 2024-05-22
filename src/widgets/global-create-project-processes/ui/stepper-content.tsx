"use client";
import StepperCard from "./stepper-card";
import StepperWrapper from "./stepper-wrapper";
import { EndAuthZustandForm } from "@/features/end-auth/zustand-form";
import { useStepper } from "@/ui/stepper";
import { stepIndexes } from "../model/constants/steps";
import { StepIndexesProps } from "../model/types/steps";
import {
  CreateProjectProcessesProvider,
  CreateProjectProcessesContent,
} from "@/features/create-project/processes";

export default function Content() {
  const { activeStep, prevStep, nextStep } = useStepper();

  const steps: Record<StepIndexesProps, React.ReactNode> = {
    [stepIndexes.first]: (
      <StepperWrapper>
        <StepperCard
          title={"Завершите регистрацию аккаунта"}
          description={"Отредактируйте информацию и приступайте к работе"}
        >
          <EndAuthZustandForm onSubmit={nextStep} />
        </StepperCard>
      </StepperWrapper>
    ),
    [stepIndexes.second]: (
      <CreateProjectProcessesProvider>
        <CreateProjectProcessesContent onNavigateBack={prevStep} />
      </CreateProjectProcessesProvider>
    ),
  };

  return <>{steps[activeStep as StepIndexesProps]}</>;
}
