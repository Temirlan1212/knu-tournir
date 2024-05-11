import { RestorePasswordStore } from "../store/restore-password";

export const selectRestorePasswordLoading = (state: RestorePasswordStore) =>
  state.loading;
export const selectRestorePasswordSetLoading = (state: RestorePasswordStore) =>
  state.setLoading;
