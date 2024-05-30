"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";
import { Checkbox } from "./checkbox";

export const SelectMutipleCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    id: string;
    label?: string;
  }
>(({ label, id, ...props }, ref) => {
  return (
    <label
      htmlFor={"tima"}
      className="flex gap-2 items-center border border-1 p-[10px] rounded-md"
    >
      <Checkbox id={id} ref={ref} {...props} />
      {label}
    </label>
  );
});
SelectMutipleCheckbox.displayName = "SelectMutipleCheckbox";
