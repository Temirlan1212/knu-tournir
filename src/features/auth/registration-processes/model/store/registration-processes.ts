import { ValueOf } from "next/dist/shared/lib/constants";
import { create } from "zustand";
import {
  RegistrationProcessesEnum,
  RegistrationProcessesQueue,
} from "../constants/registration-processes";

export interface RegistrationProcessesStoreProps {
  process: ValueOf<RegistrationProcessesEnum>;
  setProcess: (v: RegistrationProcessesStoreProps["process"]) => void;
  next: () => void;
  prev: () => void;
}

export const useRegistrationProcessesStore =
  create<RegistrationProcessesStoreProps>((set, get) => ({
    process: RegistrationProcessesEnum.FIRST,
    setProcess: (process) => set({ process }),
    next: () => {
      const currentProcess = get().process;
      const processIndex = RegistrationProcessesQueue.findIndex(
        (item) => item === currentProcess
      );
      const nextProcess =
        RegistrationProcessesQueue?.[processIndex + 1] || currentProcess;
      set({ process: nextProcess });
    },
    prev: () => {
      const currentProcess = get().process;
      const processIndex = RegistrationProcessesQueue.findIndex(
        (item) => item === currentProcess
      );
      const nextProcess =
        RegistrationProcessesQueue?.[processIndex - 1] || currentProcess;
      set({ process: nextProcess });
    },
  }));
