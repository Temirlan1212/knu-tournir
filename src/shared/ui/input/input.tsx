import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/classnames";

const inputVariants = cva("", {
  variants: {
    variant: {
      destructive:
        "focus-visible:ring-destructive ring-1 ring-destructive/[.5] placeholder:text-destructive",
    },
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-auto w-full rounded-md px-[16px] py-[14px] text-sm transition-colors",
          "bg-transparent",
          "border border-input",
          "file:text-sm file:font-medium file:bg-transparent file:border-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "placeholder:text-muted-foreground",
          inputVariants({ variant, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
