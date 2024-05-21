import * as z from "zod";
import {
  zodRequiredField,
  zodRequiredFileField,
} from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldNames } from "@/shared/constants/field-names";

export const dto = z.object({
  [fieldNames.INPUT_NAME]: zodRequiredField(),
  [fieldNames.IMAGE]: zodRequiredFileField().nullable(),
});

export const resolver = zodResolver(dto);
