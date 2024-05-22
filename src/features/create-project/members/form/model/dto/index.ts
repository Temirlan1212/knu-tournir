import * as z from "zod";
import { zodRequiredField } from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldNames } from "@/shared/constants/field-names";

export const dto = z.object({
  [fieldNames.MEMBERS_TYPE]: zodRequiredField(),
});

export const resolver = zodResolver(dto);
