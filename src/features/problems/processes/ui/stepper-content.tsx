"use client";
import {
  GlobalCreateProjectProcessesCard,
  GlobalCreateProjectProcessesWrapper,
  GlobalCreateProjectProcessesWrapperProps,
} from "@/widgets/global-create-project-processes";
import { useStepper } from "@/ui/stepper";
import { stepIndexes } from "../model/constants/steps";
import { StepIndexesProps } from "../model/types/steps";
import { ProblemsZustandForm } from "../../form";
import { fieldNames } from "@/shared/constants/field-names";

export interface ContentProps
  extends GlobalCreateProjectProcessesWrapperProps {}

export default function Content({
  onNavigateBack,
  onNavigateForward,
}: ContentProps) {
  const { activeStep, prevStep, nextStep } = useStepper();

  const steps: Record<StepIndexesProps, React.ReactNode> = {
    [stepIndexes.first]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={onNavigateBack}>
        <GlobalCreateProjectProcessesCard
          title={"Есть ли у вашего проекта проблемы, перечисленные ниже?"}
          description={"Рассчитываем потенциальную работу над вашим проектом"}
        >
          <ProblemsZustandForm
            onSubmit={nextStep}
            formVariant={fieldNames.PROBLEMS_LIST}
          />
        </GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
    [stepIndexes.second]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={prevStep}>
        <GlobalCreateProjectProcessesCard
          title={"Что хотите сделать, используя инструменты платформы?"}
          description={"Рассчитываем потенциальную работу над вашим проектом"}
        >
          <ProblemsZustandForm
            onSubmit={nextStep}
            formVariant={fieldNames.PROBLEMS_GOAL}
          />
        </GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
    [stepIndexes.third]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={prevStep}>
        <GlobalCreateProjectProcessesCard
          title={"Какую задачу на проекте считаете наиболее приоритетной?"}
          description={"Рассчитываем потенциальную работу над вашим проектом"}
        >
          <ProblemsZustandForm
            onSubmit={onNavigateForward}
            formVariant={fieldNames.PROBLEMS_PRIORITY}
          />
        </GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
  };

  return <>{steps[activeStep as StepIndexesProps]}</>;
}
