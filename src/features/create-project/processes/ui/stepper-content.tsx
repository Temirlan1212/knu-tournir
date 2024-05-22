"use client";
import {
  GlobalCreateProjectProcessesCard,
  GlobalCreateProjectProcessesWrapper,
  GlobalCreateProjectProcessesWrapperProps,
} from "@/widgets/global-create-project-processes";
import { useStepper } from "@/ui/stepper";
import { stepIndexes } from "../model/constants/steps";
import { StepIndexesProps } from "../model/types/steps";
import { NamingsZustandForm as CreateProjectNamingsZustandForm } from "@/features/create-project/namings";

export interface ContentProps
  extends GlobalCreateProjectProcessesWrapperProps {}

export default function Content({ onNavigateBack }: ContentProps) {
  const { activeStep, prevStep, nextStep } = useStepper();

  const steps: Record<StepIndexesProps, React.ReactNode> = {
    [stepIndexes.first]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={onNavigateBack}>
        <GlobalCreateProjectProcessesCard
          title={"Завершите регистрацию аккаунта"}
          description={"Отредактируйте информацию и приступайте к работе"}
        >
          <CreateProjectNamingsZustandForm onSubmit={nextStep} />
        </GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
    [stepIndexes.second]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={prevStep}>
        <GlobalCreateProjectProcessesCard
          title={"Создайте первый проект"}
          description={"Отредактируйте информацию и приступайте к работе"}
        ></GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
  };

  return <>{steps[activeStep as StepIndexesProps]}</>;
}
