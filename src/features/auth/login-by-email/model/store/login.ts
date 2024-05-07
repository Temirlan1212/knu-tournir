import { LoadingStatus } from "@/shared/lib/types/loading";
import { create } from "zustand";

export interface LoginStore {
  loading: LoadingStatus;
  setLoading: (loading: LoadingStatus) => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  loading: "init",
  setLoading: (loading) => set({ loading }),
}));
