import React from "react";
import {
  FloatingInputWithRefProps,
  FloatingLabelInput,
  FloatingLabelInputProps,
  FloatingPasswordLabelInput,
} from "./floating-label-input";
import { FormControl, FormItem } from "./form";
import {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";

interface FormFloatingLabelInputProps
  extends React.PropsWithoutRef<FloatingLabelInputProps> {
  field: ControllerRenderProps<any, any>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<any>;
}

const FormFloatingLabelInput = React.forwardRef<
  React.ElementRef<FloatingInputWithRefProps>,
  FormFloatingLabelInputProps
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

const FormFloatingPasswordLabelInput = React.forwardRef<
  React.ElementRef<FloatingInputWithRefProps>,
  FormFloatingLabelInputProps
>(({ field, fieldState: { error }, formState, label, ...props }, ref) => {
  const errorMessage = error?.message ? String(error?.message) : null;
  const isError = errorMessage != null;
  return (
    <FormItem ref={ref}>
      <FormControl>
        <FloatingPasswordLabelInput
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
FormFloatingPasswordLabelInput.displayName = "FormFloatingPasswordLabelInput";

export { FormFloatingLabelInput, FormFloatingPasswordLabelInput };
export type { FormFloatingLabelInputProps };
