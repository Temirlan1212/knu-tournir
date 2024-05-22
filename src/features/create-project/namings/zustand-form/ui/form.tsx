"use client";
import { useForm } from "react-hook-form";
import {
  NamingsDto,
  NamingsForm,
  namingsZodResolver,
} from "@/features/create-project/namings/form";
import { useFormStore, useFormStorePersist } from "../model/store/form";
import {
  selectFormStoreSetValues,
  selectFormStoreValues,
} from "../model/selectors/form";
import { formStoreVariants } from "@/shared/constants/variants";
import { fieldNames } from "@/shared/constants/field-names";

const { PROJECT_ACTIVITY_FIELD, PROJECT_NAME, PROJECT_WEBSITE } = fieldNames;

const storeVariantsByKey = {
  [formStoreVariants.default]: useFormStore,
  [formStoreVariants.persist]: useFormStorePersist,
} as const;

export interface FormProps {
  storeVariant?: keyof typeof formStoreVariants;
  onSubmit?: () => void;
}

export default function FormComponent({
  storeVariant = formStoreVariants.default,
  ...rest
}: FormProps) {
  const useStore = storeVariantsByKey[storeVariant];
  const setValues = useStore(selectFormStoreSetValues);
  const values = useStore(selectFormStoreValues);

  const form = useForm<NamingsDto>({
    resolver: namingsZodResolver,
    values: values != null ? values : undefined,
    defaultValues: {
      [PROJECT_ACTIVITY_FIELD]: values?.[PROJECT_ACTIVITY_FIELD] || "",
      [PROJECT_NAME]: values?.[PROJECT_NAME] || "",
      [PROJECT_WEBSITE]: values?.[PROJECT_WEBSITE] || "",
    },
  });

  async function onSubmit(values: NamingsDto) {
    setValues({ values });
    rest?.onSubmit && rest.onSubmit();
  }

  return <NamingsForm {...form} onSubmit={onSubmit} />;
}
