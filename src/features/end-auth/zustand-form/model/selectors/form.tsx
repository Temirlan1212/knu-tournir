import { FormStoreProps } from "../store/form";

export const selectFormStoreValues = (state: FormStoreProps) => state.values;
export const selectFormStoreSetValues = (state: FormStoreProps) =>
  state.setValues;
export const selectFormStoreClearValues = (state: FormStoreProps) =>
  state.clearValues;
