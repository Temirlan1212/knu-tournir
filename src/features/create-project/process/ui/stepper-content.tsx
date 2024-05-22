"use client";
import {
  CreateProjectProcessCard,
  CreateProjectProcessWrapper,
} from "@/entities/create-project-process";
import { useStepper } from "@/ui/stepper";
import { stepIndexes } from "../model/constants/steps";
import { StepIndexesProps } from "../model/types/steps";
import { NamingsZustandForm as CreateProjectNamingsZustandForm } from "@/features/create-project/namings";

export default function Content() {
  const { activeStep, prevStep, nextStep } = useStepper();

  const steps: Record<StepIndexesProps, React.ReactNode> = {
    [stepIndexes.first]: (
      <CreateProjectProcessWrapper>
        <CreateProjectProcessCard
          title={"Завершите регистрацию аккаунта"}
          description={"Отредактируйте информацию и приступайте к работе"}
        >
          <CreateProjectNamingsZustandForm onSubmit={nextStep} />
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
