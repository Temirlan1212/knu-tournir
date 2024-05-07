import { LoadingStatus } from "@/shared/lib/types/loading";
import { create } from "zustand";

export interface RegistrationDtoStore {
  loading: LoadingStatus;
  setLoading: (loading: LoadingStatus) => void;
}

export const useRegistrationStore = create<RegistrationDtoStore>((set) => ({
  loading: "init",
  setLoading: (loading) => set({ loading }),
}));
