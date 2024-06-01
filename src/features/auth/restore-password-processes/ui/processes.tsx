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
import { RestorePasswordCard } from "@/features/auth/restore-password";
import RestorePasswordRequestForm from "@/features/auth/restore-password-request/restore-password-request-form";
import RestorePasswordResetForm from "@/features/auth/restore-password-reset-form";
import { useRouter } from "next/navigation";
import { paths } from "@/shared/routing";
import { useState } from "react";

export default function Processes() {
  const navigation = useRouter();
  const startCountdown = useCountdownStore((state) => state.startCountdown);
  const process = useProcessesStore(selectProcessProcess);
  const next = useProcessesStore(selectProcessNext);
  const prev = useProcessesStore(selectProcessPrev);
  const [gmail, setGmail] = useState("");

  return (
    <div>
      <div className={cn(process !== ProcessesEnum.FIRST ? "hidden" : "block")}>
        <RestorePasswordCard
          onSubmitSuccess={(v) => {
            setGmail(v.email);
            next();
          }}
        />
      </div>
      <div
        className={cn(process !== ProcessesEnum.SECOND ? "hidden" : "block")}
      >
        <RestorePasswordRequestForm
          email={gmail}
          onBack={prev}
          onSubmitSuccess={next}
        />
      </div>
      <div className={cn(process !== ProcessesEnum.THIRD ? "hidden" : "block")}>
        <RestorePasswordResetForm
          email={gmail}
          onBack={prev}
          onSubmitSuccess={() => {
            navigation.push(paths.login);
          }}
        />
      </div>
    </div>
  );
}
