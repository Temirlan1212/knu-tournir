import { RegistrationProcessesStoreProps } from "../store/registration-processes";

export const selectRegistrationProcessesProcess = (
  state: RegistrationProcessesStoreProps
) => state.process;
export const selectRegistrationProcessesSetProcess = (
  state: RegistrationProcessesStoreProps
) => state.setProcess;
