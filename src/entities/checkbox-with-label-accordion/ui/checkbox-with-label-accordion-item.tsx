"use client";
import { CheckboxWithLabel } from "@/shared/ui/checkbox";
import {
  Accordion,
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
    <>
      <AccordionItem value={accordionValue} className="w-full">
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

        <AccordionContent className="max-h-[400px] overflow-y-auto">
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
    </>
  );
}
