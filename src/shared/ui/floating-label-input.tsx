import * as React from "react";

import { Input, InputProps } from "@/ui/input";
import { Label } from "@/ui/label";
import { cn } from "@/shared/lib/classnames";

export interface FloatingInputProps extends InputProps {}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, variant, placeholder, ...props }, ref) => {
    const isError = variant === "destructive";
    return (
      <Input
        placeholder={isError ? placeholder : ""}
        variant={variant}
        className={cn(
          "peer pt-[23px] pb-[5px] focus:pt-[23px] focus:pb-[5px] !placeholder-gray-600",
          "placeholder-shown:px-[16px] placeholder-shown:py-[14px]",
          isError && "!pt-[23px] !pb-[5px]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatingInput.displayName = "FloatingInput";

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label> & { isError?: boolean }
>(({ className, isError, ...props }, ref) => {
  return (
    <Label
      className={cn(
        "absolute start-2 top-[18px] z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-[11px] text-sm text-gray-600 font-normal duration-300 truncate max-w-[420px] bg-transparent",
        "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2",
        "peer-placeholder-shown:scale-100",
        "peer-focus:top-[18px] peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-[11px]",
        "rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
        "peer-focus:max-w-[420px] peer-placeholder-shown:max-w-[310px]",
        "peer-focus:secondary peer-focus:dark:secondary",
        isError &&
          "!top-[18px] !scale-75 !-translate-y-4 text-destructive !max-w-[420px]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";

type FloatingLabelInputProps = InputProps & {
  label?: string;
  errorMessage?: string;
};

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, errorMessage, variant, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingInput
        placeholder={errorMessage ? label : ""}
        ref={ref}
        id={id}
        variant={variant}
        {...props}
      />
      <FloatingLabel htmlFor={id} isError={variant === "destructive"}>
        {errorMessage ? errorMessage : label}
      </FloatingLabel>
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingInput, FloatingLabel, FloatingLabelInput };
export type { FloatingLabelInputProps };
