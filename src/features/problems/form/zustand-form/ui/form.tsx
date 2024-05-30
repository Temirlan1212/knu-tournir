"use client";
import { useForm } from "react-hook-form";
import {
  ProblemsDto,
  ProblemsForm,
  ProblemsFormProps,
} from "@/features/problems/form";
import { useFormStore, useFormStorePersist } from "../model/store/form";
import {
  selectFormStoreSetValues,
  selectFormStoreValues,
} from "../model/selectors/form";
import { formStoreVariants } from "@/shared/constants/variants";
import { fieldNames } from "@/shared/constants/field-names";
import { data1, data2, data3 } from "../model/constants/data";
import { getResolver } from "../../form/model/dto";

const storeVariantsByKey = {
  [formStoreVariants.default]: useFormStore,
  [formStoreVariants.persist]: useFormStorePersist,
} as const;

export interface FormProps {
  storeVariant?: keyof typeof formStoreVariants;
  formVariant: ProblemsFormProps["name"];
  onSubmit?: () => void;
}

export default function FormComponent({
  storeVariant = formStoreVariants.default,
  formVariant,
  ...rest
}: FormProps) {
  const useStore = storeVariantsByKey[storeVariant];
  const setValues = useStore(selectFormStoreSetValues);
  const values = useStore(selectFormStoreValues);

  const form = useForm<ProblemsDto>({
    resolver: getResolver(formVariant),
    values: values != null ? values : undefined,
    defaultValues: {
      [formVariant]: values?.[formVariant] || [],
    },
  });

  async function onSubmit(v: ProblemsDto) {
    setValues({ values: { ...values, ...v } });
    rest?.onSubmit && rest.onSubmit();
  }

  return (
    <>
      {formVariant === fieldNames.PROBLEMS_LIST && (
        <ProblemsForm
          name={fieldNames.PROBLEMS_LIST}
          data={data1}
          {...form}
          onSubmit={onSubmit}
        />
      )}
      {formVariant === fieldNames.PROBLEMS_GOAL && (
        <ProblemsForm
          name={fieldNames.PROBLEMS_GOAL}
          data={data2}
          {...form}
          onSubmit={onSubmit}
        />
      )}
      {formVariant === fieldNames.PROBLEMS_PRIORITY && (
        <ProblemsForm
          name={fieldNames.PROBLEMS_PRIORITY}
          data={data3}
          {...form}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
}
