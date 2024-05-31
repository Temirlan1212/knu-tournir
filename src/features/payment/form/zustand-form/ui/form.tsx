"use client";
import { useForm } from "react-hook-form";
import {
  PaymentDto,
  PaymentForm,
  paymentZodResolver,
} from "@/features/payment/form";
import { useFormStore, useFormStorePersist } from "../model/store/form";
import {
  selectFormStoreSetValues,
  selectFormStoreValues,
} from "../model/selectors/form";
import { formStoreVariants } from "@/shared/constants/variants";
import { fieldNames } from "@/shared/constants/field-names";
import { data1, data2, data3 } from "../model/constants/data";

const storeVariantsByKey = {
  [formStoreVariants.default]: useFormStore,
  [formStoreVariants.persist]: useFormStorePersist,
} as const;

export interface FormProps {
  storeVariant?: keyof typeof formStoreVariants;
  onSubmit?: (v: PaymentDto) => void;
}

export default function FormComponent({
  storeVariant = formStoreVariants.default,
  ...rest
}: FormProps) {
  const useStore = storeVariantsByKey[storeVariant];
  const setValues = useStore(selectFormStoreSetValues);
  const values = useStore(selectFormStoreValues);

  const form = useForm<PaymentDto>({
    resolver: paymentZodResolver,
    values: values != null ? values : undefined,
    mode: "onChange",
    defaultValues: {
      [fieldNames.PAYMENT_NUMBER]: "",
      [fieldNames.PAYMENT_CVC]: "",
      [fieldNames.PAYMENT_NAME]: "",
      [fieldNames.PAYMENT_EXPIRY]: "",
    },
  });

  form.watch((v: any) => {
    setValues({ values: { ...values, ...v } });
    return v;
  });

  async function onSubmit(v: PaymentDto) {
    setValues({ values: { ...values, ...v } });
    rest?.onSubmit && rest.onSubmit(v);
  }

  return (
    <>
      <PaymentForm data={data1} {...form} onSubmit={onSubmit} />
    </>
  );
}
