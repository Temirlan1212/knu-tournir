import * as z from "zod";
import {
  zodRequiredField,
  zodValidateMinMax,
  zodMessages,
} from "@/shared/config/zod/schema";

export const loginDto = z.object({
  inputPassword: zodValidateMinMax(6, 1000),
  inputEmail: zodRequiredField().email(zodMessages.validEmail),
});
