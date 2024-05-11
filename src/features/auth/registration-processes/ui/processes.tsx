"use client";

import { ConfirmEmailCard } from "@/features/auth/confirm-email";
import { cn } from "@/shared/lib/classnames";
import { useCountdownStore } from "@/entities/countdown-button/model/store/countdown";
import useProcessesStore from "../model/store/processes";
import {
  selectProcessNext,
  selectProcessPrev,
  selectProcessProcess,
} from "../model/selectors/processes";
import { ProcessesEnum } from "../model/constants/processes";
import { RegistrationCard } from "@/features/auth/registration";

export default function Processes() {
  const startCountdown = useCountdownStore((state) => state.startCountdown);
  const process = useProcessesStore(selectProcessProcess);
  const next = useProcessesStore(selectProcessNext);
  const prev = useProcessesStore(selectProcessPrev);

  const handleSignupSuccess = () => {
    startCountdown();
    next();
  };

  return (
    <div>
      <div className={cn(process !== ProcessesEnum.FIRST ? "hidden" : "block")}>
        <RegistrationCard onSubmitSuccess={handleSignupSuccess} />
      </div>
      <div
        className={cn(process !== ProcessesEnum.SECOND ? "hidden" : "block")}
      >
        <ConfirmEmailCard onBack={prev} />
      </div>
    </div>
  );
}
