import { PaymentDto } from "@/features/payment/form";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storageNames } from "@/shared/constants/storage-names";

export interface FormStoreProps {
  values: PaymentDto | null;
  setValues: ({ values }: Pick<FormStoreProps, "values">) => void;
  clearValues: () => void;
}

export const useFormStore = create<FormStoreProps>()((set, get) => ({
  values: null,
  setValues: ({ values }) => set({ values }),
  clearValues: () => set({ values: null }),
}));

export const useFormStorePersist = create<FormStoreProps>()(
  persist(
    (set, get) => ({
      values: null,
      setValues: ({ values }) => set({ values }),
      clearValues: () => set({ values: null }),
    }),
    {
      name: storageNames.zustand_payment_form,
    }
  )
);
