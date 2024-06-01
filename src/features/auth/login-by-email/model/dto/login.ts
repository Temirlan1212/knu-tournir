import * as z from "zod";
import {
  zodRequiredField,
  zodValidateMinMax,
} from "@/shared/config/zod/schema";

export const loginDto = z.object({
  password: zodValidateMinMax(6, 1000),
  email: zodRequiredField(),
});
