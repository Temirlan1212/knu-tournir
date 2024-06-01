import {
  zodRequiredField,
  zodValidateMinMax,
  zodMessages,
} from "@/shared/config/zod/schema";
import * as z from "zod";

export const registrationDto = z
  .object({
    first_name: zodRequiredField(),
    email: zodRequiredField().email(zodMessages.validEmail),
    last_name: zodRequiredField(),
    password: zodValidateMinMax(8, 1000),
    password2: zodValidateMinMax(8, 1000),
  })
  .refine(
    (values) => {
      return values.password === values.password2;
    },
    {
      message: zodMessages.passwordShouldMatch,
      path: ["password2"],
    }
  );
