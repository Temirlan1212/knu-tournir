import { ProcessesStoreProps } from "../store/processes";

export const selectProcessProcess = (state: ProcessesStoreProps) =>
  state.process;
export const selectProcessSetProcess = (state: ProcessesStoreProps) =>
  state.setProcess;

export const selectProcessNext = (state: ProcessesStoreProps) => state.next;
export const selectProcessPrev = (state: ProcessesStoreProps) => state.prev;
