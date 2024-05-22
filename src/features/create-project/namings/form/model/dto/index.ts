import * as z from "zod";
import {
  zodRequiredField,
  zodRequiredFileField,
} from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldNames } from "@/shared/constants/field-names";

export const dto = z.object({
  [fieldNames.PROJECT_NAME]: zodRequiredField(),
  [fieldNames.PROJECT_WEBSITE]: zodRequiredField(),
  [fieldNames.PROJECT_ACTIVITY_FIELD]: zodRequiredField(),
  [fieldNames.PROJECT_IMAGE]: zodRequiredFileField().nullable(),
});

export const resolver = zodResolver(dto);
