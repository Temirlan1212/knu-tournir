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

const storeVariantsByKey = {
  [formStoreVariants.default]: useFormStore,
  [formStoreVariants.persist]: useFormStorePersist,
} as const;

export interface FormProps {
  storeVariants?: keyof typeof formStoreVariants;
}

export default function FormComponent({
  storeVariants = formStoreVariants.default,
}: FormProps) {
  const useStore = storeVariantsByKey[storeVariants];
  const setValues = useStore(selectFormStoreSetValues);
  const values = useStore(selectFormStoreValues);

  const form = useForm<EndAuthDto>({
    resolver: endAuthZodResolver,
    values: values != null ? values : undefined,
  });

  async function onSubmit(values: EndAuthDto) {
    setValues({ values });
  }

  return <EndAuthForm {...form} onSubmit={onSubmit} />;
}
