"use client";

import { RegistrationCard } from "@/features/auth/registration";
import { useRegistrationProcessesStore } from "../model/store/registration-processes";
import { ConfirmEmailCard } from "@/features/auth/confirm-email";
import { cn } from "@/shared/lib/classnames";
import {
  selectRegistrationProcessesProcess,
  selectRegistrationProcessesSetProcess,
} from "../model/selectors/registration-processes";
import { useRouter } from "next/navigation";
import { RegistrationProcessesEnum } from "../model/constants/registration-processes";

export default function RegistrationProcesses() {
  const router = useRouter();
  const process = useRegistrationProcessesStore(
    selectRegistrationProcessesProcess
  );

  const setProcess = useRegistrationProcessesStore(
    selectRegistrationProcessesSetProcess
  );

  const handleSignupSuccess = () => {
    setProcess(RegistrationProcessesEnum.SECOND);
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
        <ConfirmEmailCard />
      </div>
    </div>
  );
}
