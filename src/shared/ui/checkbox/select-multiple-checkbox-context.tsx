import * as React from "react";

interface SelectMultipleCheckboxContextValue {
  defaultValues: ValuesProps;
}

type SelectMultipleCheckboxContextProviderProps = {
  value: SelectMultipleCheckboxContextValue;
};

type HandleOnChangeProps = {
  value: string;
  isChecked: boolean;
  onChangeCallback?: (v: ValuesProps) => void;
};

export type ValuesProps = string[];
export type DataProps = Record<"value" | "id" | "icon" | string, string>[];

const SelectMultipleCheckboxContext = React.createContext<{
  values: ValuesProps;
  isChecked?: (v: string) => boolean;
  onChange?: (props: HandleOnChangeProps) => void;
}>({ values: [] });

const SelectMultipleCheckboxProvider = ({
  value: { defaultValues },
  children,
}: React.PropsWithChildren<SelectMultipleCheckboxContextProviderProps>) => {
  const [values, setValues] = React.useState<ValuesProps>([]);

  const handleValueChange = ({
    value,
    isChecked,
    onChangeCallback,
  }: HandleOnChangeProps) => {
    let newValues: ValuesProps = values;
    if (isChecked) {
      const updatedValues = values.filter((v) => v !== value);
      newValues = updatedValues;
    } else {
      const updatedValues = [...values, value];
      newValues = updatedValues;
    }
    setValues(newValues);
    onChangeCallback && onChangeCallback(newValues);
  };

  const verifyIsValueChecked = (v: string) => values.includes(v);

  React.useEffect(() => {
    if (defaultValues.length > 0) setValues(defaultValues);
  }, []);

  return (
    <SelectMultipleCheckboxContext.Provider
      value={{
        values,
        isChecked: verifyIsValueChecked,
        onChange: handleValueChange,
      }}
    >
      {children}
    </SelectMultipleCheckboxContext.Provider>
  );
};

export { SelectMultipleCheckboxContext, SelectMultipleCheckboxProvider };
