"use client";
import { useForm } from "react-hook-form";
import {
  PromotionChannelsDto,
  PromotionChannelsForm,
  promotionChannelsZodResolver,
} from "@/features/create-project/promotion-channels";
import { useFormStore, useFormStorePersist } from "../model/store/form";
import {
  selectFormStoreSetValues,
  selectFormStoreValues,
} from "../model/selectors/form";
import { formStoreVariants } from "@/shared/constants/variants";
import { fieldNames } from "@/shared/constants/field-names";

const {
  PROMOTION_CHANNELS_OFFLINE_EVENTS,
  PROMOTION_CHANNELS_PLATFORMS,
  PROMOTION_CHANNELS_SOCIAL_MEDIA,
} = fieldNames;

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

  const form = useForm<PromotionChannelsDto>({
    resolver: promotionChannelsZodResolver,
    values: values != null ? values : undefined,
    defaultValues: {
      [PROMOTION_CHANNELS_OFFLINE_EVENTS]:
        values?.[PROMOTION_CHANNELS_OFFLINE_EVENTS] || "",
      [PROMOTION_CHANNELS_PLATFORMS]:
        values?.[PROMOTION_CHANNELS_PLATFORMS] || "",
      [PROMOTION_CHANNELS_SOCIAL_MEDIA]:
        values?.[PROMOTION_CHANNELS_SOCIAL_MEDIA] || "",
    },
  });

  async function onSubmit(values: PromotionChannelsDto) {
    setValues({ values });
    rest?.onSubmit && rest.onSubmit();
  }

  return <PromotionChannelsForm {...form} onSubmit={onSubmit} />;
}
