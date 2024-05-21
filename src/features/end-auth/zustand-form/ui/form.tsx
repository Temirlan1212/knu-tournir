"use client";
import { useForm } from "react-hook-form";
import {
  EndAuthDto,
  EndAuthForm,
  endAuthZodResolver,
} from "@/features/end-auth/form";
import { useFormStore, useFormStorePersist } from "../model/store/form";
import {
  selectFormStoreSetValues,
  selectFormStoreValues,
} from "../model/selectors/form";
import { formStoreVariants } from "@/shared/constants/variants";
import { fieldNames } from "@/shared/constants/field-names";

const { IMAGE, INPUT_NAME } = fieldNames;

const storeVariantsByKey = {
  [formStoreVariants.default]: useFormStore,
  [formStoreVariants.persist]: useFormStorePersist,
} as const;

export interface FormProps {
  storeVariant?: keyof typeof formStoreVariants;
}

export default function FormComponent({
  storeVariant = formStoreVariants.default,
}: FormProps) {
  const useStore = storeVariantsByKey[storeVariant];
  const setValues = useStore(selectFormStoreSetValues);
  const values = useStore(selectFormStoreValues);

  const form = useForm<EndAuthDto>({
    resolver: endAuthZodResolver,
    values: values != null ? values : undefined,
    defaultValues: {
      [IMAGE]: values?.[IMAGE] || null,
      [INPUT_NAME]: values?.[INPUT_NAME] || "",
    },
  });

  async function onSubmit(values: EndAuthDto) {
    setValues({ values });
  }

  return <EndAuthForm {...form} onSubmit={onSubmit} />;
}
