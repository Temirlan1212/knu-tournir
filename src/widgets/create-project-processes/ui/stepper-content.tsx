"use client";
import {
  CreateProjectProcessCard,
  CreateProjectProcessWrapper,
} from "@/entities/create-project-process";
import { EndAuthZustandForm } from "@/features/end-auth/zustand-form";
import { useStepper } from "@/ui/stepper";
import { stepIndexes } from "../model/constants/steps";
import { StepIndexesProps } from "../model/types/steps";

export default function Content() {
  const { activeStep, prevStep, nextStep } = useStepper();

  const steps: Record<StepIndexesProps, React.ReactNode> = {
    [stepIndexes.first]: (
      <CreateProjectProcessWrapper>
        <CreateProjectProcessCard
          title={"Завершите регистрацию аккаунта"}
          description={"Отредактируйте информацию и приступайте к работе"}
        >
          <EndAuthZustandForm onSubmit={nextStep} />
        </CreateProjectProcessCard>
      </CreateProjectProcessWrapper>
    ),
    [stepIndexes.second]: (
      <CreateProjectProcessWrapper onNavigateBack={prevStep}>
        <CreateProjectProcessCard
          title={"Создайте первый проект"}
          description={"Отредактируйте информацию и приступайте к работе"}
        ></CreateProjectProcessCard>
      </CreateProjectProcessWrapper>
    ),
  };

  return <>{steps[activeStep as StepIndexesProps]}</>;
}
