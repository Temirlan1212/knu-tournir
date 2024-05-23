import * as z from "zod";
import { zodMessages, zodRequiredField } from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldNames } from "@/shared/constants/field-names";

export const dto = z.object({
  [fieldNames.PROMOTION_CHANNELS_OFFLINE_EVENTS]: zodRequiredField()
    .array()
    .nonempty(zodMessages.required),
  [fieldNames.PROMOTION_CHANNELS_SOCIAL_MEDIA]: zodRequiredField()
    .array()
    .nonempty(zodMessages.required),
  [fieldNames.PROMOTION_CHANNELS_PLATFORMS]: zodRequiredField()
    .array()
    .nonempty(zodMessages.required),
});

export const resolver = zodResolver(dto);
