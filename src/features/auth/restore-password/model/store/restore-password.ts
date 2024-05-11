import { LoadingStatus } from "@/shared/lib/types/loading";
import { create } from "zustand";

export interface RestorePasswordStore {
  loading: LoadingStatus;
  setLoading: (loading: LoadingStatus) => void;
}

export const useRestorePasswordStore = create<RestorePasswordStore>((set) => ({
  loading: "init",
  setLoading: (loading) => set({ loading }),
}));
