import { RegistrationDtoStore } from "../store/registration";

export const selectRegistrationLoading = (state: RegistrationDtoStore) =>
  state.loading;
export const selectRegistrationSetLoading = (state: RegistrationDtoStore) =>
  state.setLoading;
