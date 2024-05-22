"use client";
import { useForm } from "react-hook-form";
import {
  MembersDto,
  MembersForm,
  membersZodResolver,
} from "@/features/create-project/members";
import { useFormStore, useFormStorePersist } from "../model/store/form";
import {
  selectFormStoreSetValues,
  selectFormStoreValues,
} from "../model/selectors/form";
import { formStoreVariants } from "@/shared/constants/variants";
import { fieldNames } from "@/shared/constants/field-names";

const { MEMBERS_TYPE } = fieldNames;

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

  const form = useForm<MembersDto>({
    resolver: membersZodResolver,
    values: values != null ? values : undefined,
    defaultValues: {
      [MEMBERS_TYPE]: values?.[MEMBERS_TYPE] || "",
    },
  });

  async function onSubmit(values: MembersDto) {
    setValues({ values });
    rest?.onSubmit && rest.onSubmit();
  }

  return <MembersForm {...form} onSubmit={onSubmit} />;
}
