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
import { MembersZustandForm } from "@/features/create-project/members";
import { PromotionChannelsZustandForm } from "../../promotion-channels";

export interface ContentProps
  extends GlobalCreateProjectProcessesWrapperProps {}

export default function Content({ onNavigateBack }: ContentProps) {
  const { activeStep, prevStep, nextStep } = useStepper();

  const steps: Record<StepIndexesProps, React.ReactNode> = {
    [stepIndexes.first]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={onNavigateBack}>
        <GlobalCreateProjectProcessesCard
          title={"Создайте первый проект"}
          description={"Отредактируйте информацию и приступайте к работе"}
        >
          <CreateProjectNamingsZustandForm onSubmit={nextStep} />
        </GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
    [stepIndexes.second]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={prevStep}>
        <GlobalCreateProjectProcessesCard
          title={"Сколько человек в команде?"}
          description={
            "Подстроим платформу под количество человек в вашей команде"
          }
          className="max-w-full !max-h-full h-full overflow-hidden justify-center"
        >
          <MembersZustandForm onSubmit={nextStep} />
        </GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
    [stepIndexes.third]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={prevStep}>
        <GlobalCreateProjectProcessesCard
          title={"Каналы продвижения"}
          description={
            "Укажите, какими каналами продвижения вы активно пользуетесь"
          }
          className="max-w-[420px] !max-h-full h-full overflow-hidden justify-center"
        >
          <PromotionChannelsZustandForm onSubmit={nextStep} />
        </GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
    [stepIndexes.four]: (
      <GlobalCreateProjectProcessesWrapper onNavigateBack={prevStep}>
        <GlobalCreateProjectProcessesCard
          title={"Создайте первый проект"}
          description={"Отредактируйте информацию и приступайте к работе"}
          className="max-w-full !max-h-full h-full overflow-hidden justify-center"
        ></GlobalCreateProjectProcessesCard>
      </GlobalCreateProjectProcessesWrapper>
    ),
  };

  return <>{steps[activeStep as StepIndexesProps]}</>;
}
