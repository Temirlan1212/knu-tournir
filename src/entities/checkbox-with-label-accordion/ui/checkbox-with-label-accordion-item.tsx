"use client";
import { cn } from "@/shared/lib/classnames";
import {
  CheckboxWithLabel,
  DataProps,
  SelectMultipleCheckboxProvider,
  ValuesProps,
  useSelectMultipleCheckbox,
} from "@/shared/ui/checkbox";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { CheckCheck } from "lucide-react";

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

function Component({
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
  const {
    values,
    onChange: handleOnChange,
    isChecked,
  } = useSelectMultipleCheckbox();

  return (
    <SelectMultipleCheckboxProvider value={{ defaultValues }}>
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
                checked={isChecked && isChecked(value)}
                iconClassName="!w-5 !h-5"
                onCheckedChange={(checked) => {
                  handleOnChange &&
                    handleOnChange({
                      value,
                      isChecked: !checked,
                      onChangeCallback: onChange,
                    });
                }}
                id={id || value || String(index)}
                label={label}
                icon={icon}
              />
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </SelectMultipleCheckboxProvider>
  );
}

export default function ComponentWithProvider({
  defaultValues,
  ...rest
}: ComponentProps) {
  return (
    <SelectMultipleCheckboxProvider value={{ defaultValues }}>
      <Component defaultValues={defaultValues} {...rest} />
    </SelectMultipleCheckboxProvider>
  );
}
