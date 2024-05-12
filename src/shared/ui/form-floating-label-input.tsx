import React from "react";
import {
  FloatingInputWithRefProps,
  FloatingLabelInput,
  FloatingLabelInputProps,
} from "./floating-label-input";
import { FormControl, FormItem } from "./form";
import {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";

const FormFloatingLabelInput = React.forwardRef<
  React.ElementRef<FloatingInputWithRefProps>,
  React.PropsWithoutRef<FloatingLabelInputProps> & {
    field: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<any>;
  }
>(({ field, fieldState: { error }, formState, label, ...props }, ref) => {
  const errorMessage = error?.message ? String(error?.message) : null;
  const isError = errorMessage != null;
  return (
    <FormItem ref={ref}>
      <FormControl>
        <FloatingLabelInput
          {...props}
          {...field}
          label={label}
          errorMessage={isError ? errorMessage : ""}
          variant={isError ? "destructive" : props.variant}
        />
      </FormControl>
    </FormItem>
  );
});
FormFloatingLabelInput.displayName = "FormFloatingLabelInput";

export { FormFloatingLabelInput };
