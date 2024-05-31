import * as z from "zod";
import { zodValidateMinMax } from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldNames } from "@/shared/constants/field-names";

export const dto = z.object({
  [fieldNames.PAYMENT_NUMBER]: zodValidateMinMax(1, 16),
  [fieldNames.PAYMENT_CVC]: zodValidateMinMax(1, 3),
  [fieldNames.PAYMENT_NAME]: zodValidateMinMax(1, 1000),
  [fieldNames.PAYMENT_EXPIRY]: zodValidateMinMax(1, 4),
});

export const resolver = zodResolver(dto);
