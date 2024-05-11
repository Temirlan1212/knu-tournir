import * as z from "zod";
import { zodRequiredField, zodMessages } from "@/shared/config/zod/schema";

export const restorePasswordDto = z.object({
  inputEmail: zodRequiredField().email(zodMessages.validEmail),
});
