import {
  zodRequiredField,
  zodValidateMinMax,
  zodMessages,
} from "@/shared/config/zod/schema";
import * as z from "zod";

export const registrationDto = z
  .object({
    inputName: zodRequiredField(),
    inputEmail: zodRequiredField().email(zodMessages.validEmail),
    inputLastname: zodRequiredField(),
    inputPassword: zodValidateMinMax(6, 1000),
    inputPasswordConfirm: zodValidateMinMax(6, 1000),
  })
  .refine(
    (values) => {
      return values.inputPassword === values.inputPasswordConfirm;
    },
    {
      message: zodMessages.passwordShouldMatch,
      path: ["inputPasswordConfirm"],
    }
  );
