import { LoginStore } from "../store/login";

export const selectLoginLoading = (state: LoginStore) => state.loading;
export const selectLoginSetLoading = (state: LoginStore) => state.setLoading;
