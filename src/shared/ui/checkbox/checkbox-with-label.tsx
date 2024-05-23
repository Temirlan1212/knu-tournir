"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";
import { Checkbox } from "./checkbox";
import Image from "next/image";
import { LucideProps } from "lucide-react";
import { cn } from "@/shared/lib/classnames";

type IconNode = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export const CheckboxWithLabel = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    id: string;
    iconClassName?: string;
    icon?: IconNode | string;
    alt?: string;
    label?: string;
  }
>(({ iconClassName, label, id, alt, icon, ...props }, ref) => {
  const path = typeof icon === "string" ? icon : null;
  const Icon = typeof icon !== "string" ? icon : null;

  return (
    <div className="flex items-center gap-3">
      <Checkbox id={id} {...props} ref={ref} />

      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex justify-center items-center gap-1"
      >
        {path && (
          <Image
            src={path}
            width={100}
            height={100}
            className={cn("w-6 h-6", iconClassName)}
            alt={alt || ""}
          />
        )}
        {Icon && <Icon className={cn("w-4 h-4", iconClassName)} />}
        {label && label}
      </label>
    </div>
  );
});
CheckboxWithLabel.displayName = "CheckboxWithLabel";
