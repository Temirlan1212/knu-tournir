"use client";
import { ChangeEventHandler, ForwardedRef, forwardRef } from "react";
import { Input } from "@/ui/input";

export interface HiddenFileInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const HiddenFileInput = forwardRef(
  ({ onChange }: HiddenFileInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <Input
      type="file"
      style={{ display: "none" }}
      ref={ref}
      onChange={onChange}
    />
  )
);

HiddenFileInput.displayName = "HiddenFileInput";
