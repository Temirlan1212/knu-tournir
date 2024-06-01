import * as z from "zod";
import { zodRequiredField, zodMessages } from "@/shared/config/zod/schema";

export const restorePasswordDto = z.object({
  email: zodRequiredField().email(zodMessages.validEmail),
});
