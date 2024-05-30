import * as React from "react";
import { SelectMultipleCheckboxContext } from "./select-multiple-checkbox-context";

export function useSelectMultipleCheckbox() {
  const context = React.useContext(SelectMultipleCheckboxContext);

  if (context === undefined) {
    throw new Error("useContext must be used within a Provider");
  }

  const { ...rest } = context;

  return {
    ...rest,
  };
}
