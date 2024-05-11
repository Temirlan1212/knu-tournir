import { ValueOf } from "next/dist/shared/lib/constants";
import { create } from "zustand";
import { RegistrationProcessesEnum } from "../constants/registration-processes";

export interface RegistrationProcessesStoreProps {
  process: ValueOf<RegistrationProcessesEnum>;
  setProcess: (v: RegistrationProcessesStoreProps["process"]) => void;
}

export const useRegistrationProcessesStore =
  create<RegistrationProcessesStoreProps>((set) => ({
    process: RegistrationProcessesEnum.FIRST,
    setProcess: (process) => set({ process }),
  }));
