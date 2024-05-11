import { ValueOf } from "next/dist/shared/lib/constants";
import { create } from "zustand";
import { ProcessesEnum, ProcessesQueue } from "../constants/processes";

export interface ProcessesStoreProps {
  process: ValueOf<ProcessesEnum>;
  setProcess: (v: ProcessesStoreProps["process"]) => void;
  next: () => void;
  prev: () => void;
}

const useProcessesStore = create<ProcessesStoreProps>((set, get) => ({
  process: ProcessesEnum.FIRST,
  setProcess: (process) => set({ process }),
  next: () => {
    const currentProcess = get().process;
    const processIndex = ProcessesQueue.findIndex(
      (item) => item === currentProcess
    );
    const nextProcess = ProcessesQueue?.[processIndex + 1] || currentProcess;
    set({ process: nextProcess });
  },
  prev: () => {
    const currentProcess = get().process;
    const processIndex = ProcessesQueue.findIndex(
      (item) => item === currentProcess
    );
    const nextProcess = ProcessesQueue?.[processIndex - 1] || currentProcess;
    set({ process: nextProcess });
  },
}));

export default useProcessesStore;
