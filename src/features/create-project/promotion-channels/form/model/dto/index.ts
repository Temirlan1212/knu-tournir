import * as z from "zod";
import { zodRequiredField } from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldNames } from "@/shared/constants/field-names";

export const dto = z.object({
  [fieldNames.PROMOTION_CHANNELS_OFFLINE_EVENTS]: zodRequiredField(),
  [fieldNames.PROMOTION_CHANNELS_SOCIAL_MEDIA]: zodRequiredField(),
  [fieldNames.PROMOTION_CHANNELS_PLATFORMS]: zodRequiredField(),
});

export const resolver = zodResolver(dto);
