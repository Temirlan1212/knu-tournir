"use client";

import { RegistrationCard } from "@/features/auth/registration";
import { useRegistrationProcessesStore } from "../model/store/registration-processes";
import { ConfirmEmailCard } from "@/features/auth/confirm-email";
import { cn } from "@/shared/lib/classnames";
import {
  selectRegistrationProcessesNext,
  selectRegistrationProcessesPrev,
  selectRegistrationProcessesProcess,
} from "../model/selectors/registration-processes";
import { RegistrationProcessesEnum } from "../model/constants/registration-processes";
import { useCountdownStore } from "@/entities/countdown-button/model/store/countdown";

export default function RegistrationProcesses() {
  const startCountdown = useCountdownStore((state) => state.startCountdown);

  const process = useRegistrationProcessesStore(
    selectRegistrationProcessesProcess
  );

  const next = useRegistrationProcessesStore(selectRegistrationProcessesNext);
  const prev = useRegistrationProcessesStore(selectRegistrationProcessesPrev);

  const handleSignupSuccess = () => {
    startCountdown();
    next();
  };

  return (
    <div>
      <div
        className={cn(
          process !== RegistrationProcessesEnum.FIRST ? "hidden" : "block"
        )}
      >
        <RegistrationCard onSubmitSuccess={handleSignupSuccess} />
      </div>
      <div
        className={cn(
          process !== RegistrationProcessesEnum.SECOND ? "hidden" : "block"
        )}
      >
        <ConfirmEmailCard onBack={prev} />
      </div>
    </div>
  );
}
