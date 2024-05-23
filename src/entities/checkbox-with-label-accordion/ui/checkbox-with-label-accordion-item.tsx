"use client";
import { cn } from "@/shared/lib/classnames";
import { CheckboxWithLabel } from "@/shared/ui/checkbox";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";

export type ValuesProps = string[];
export type DataProps = Record<"value" | "id" | "icon" | string, string>[];

export interface ComponentProps {
  data: DataProps;
  accordionValue: string;
  title?: string;
  defaultValues: ValuesProps;
  valueFieldName?: string;
  labelFieldName?: string;
  idFieldName?: string;
  iconFieldName?: string;
  onChange?: (v: ValuesProps) => void;
  className?: string;
  slots?: {
    errorMessage?: React.ReactNode;
  };
}

export default function Component({
  data,
  title,
  defaultValues,
  valueFieldName = "value",
  labelFieldName = "label",
  idFieldName = "id",
  iconFieldName = "icon",
  accordionValue,
  className,
  onChange,
  slots,
}: ComponentProps) {
  const [values, setValues] = useState<ValuesProps>([]);

  const handleValueChange = (v: string, isChecked: boolean) => {
    let newValues: ValuesProps = values;
    if (isChecked) {
      const updatedValues = values.filter((value) => value !== v);
      newValues = updatedValues;
    } else {
      const updatedValues = [...values, v];
      newValues = updatedValues;
    }
    setValues(newValues);
    onChange && onChange(newValues);
  };

  const verifyIsValueChecked = (v: string) => {
    return values.includes(v);
  };

  useEffect(() => {
    if (defaultValues.length > 0) setValues(defaultValues);
  }, []);

  return (
    <AccordionItem value={accordionValue} className={cn("w-full", className)}>
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-primary">
            <CheckCheck width={18} height={18} />
            {values.length}
          </div>
          {title ? title : null}
        </div>
      </AccordionTrigger>
      {slots?.errorMessage && slots?.errorMessage}

      <AccordionContent className="max-h-[400px] overflow-y-auto flex flex-col gap-2 border-none">
        {data.map((item, index) => {
          const label = item?.[labelFieldName];
          const value = item?.[valueFieldName];
          const id = item?.[idFieldName];
          const icon = item?.[iconFieldName];
          if (!value) return null;

          return (
            <CheckboxWithLabel
              key={index}
              checked={verifyIsValueChecked(value)}
              iconClassName="!w-5 !h-5"
              onCheckedChange={(checked) =>
                handleValueChange(value, !checked as boolean)
              }
              id={id || value || String(index)}
              label={label}
              icon={icon}
            />
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
}
