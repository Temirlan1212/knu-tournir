"use client";

import { cn } from "@/shared/lib/classnames";
import {
  CheckboxWithBorder,
  DataProps,
  SelectMultipleCheckboxProvider,
  ValuesProps,
  useSelectMultipleCheckbox,
} from "@/shared/ui/checkbox";

export interface ComponentProps {
  data: DataProps;
  defaultValues: ValuesProps;
  valueFieldName?: string;
  labelFieldName?: string;
  idFieldName?: string;
  onChange?: (v: ValuesProps) => void;
  className?: string;
  slots?: {
    errorMessage?: React.ReactNode;
  };
}

function Component({
  data,
  valueFieldName = "value",
  labelFieldName = "label",
  idFieldName = "id",
  className,
  onChange,
  slots,
}: ComponentProps) {
  const { onChange: handleOnChange, isChecked } = useSelectMultipleCheckbox();

  return (
    <div className={cn("flex flex-col gap-2 justify-start", className)}>
      {data.map((item, index) => {
        const label = item?.[labelFieldName];
        const value = item?.[valueFieldName];
        const id = item?.[idFieldName];
        if (!value) return null;

        return (
          <CheckboxWithBorder
            key={index}
            checked={isChecked && isChecked(value)}
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
          />
        );
      })}

      {slots?.errorMessage && slots?.errorMessage}
    </div>
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
