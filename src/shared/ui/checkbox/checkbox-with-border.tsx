"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";
import { Checkbox } from "./checkbox";

export const CheckboxWithBorder = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    id: string;
    label?: string;
  }
>(({ label, id, ...props }, ref) => {
  return (
    <label
      htmlFor={id}
      className="flex gap-2 items-center border border-1 p-[10px] rounded-md"
    >
      <Checkbox id={id} ref={ref} {...props} />
      {label}
    </label>
  );
});
CheckboxWithBorder.displayName = "CheckboxWithBorder";
