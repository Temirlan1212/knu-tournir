import * as z from "zod";
import { zodMessages, zodRequiredField } from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldNames } from "@/shared/constants/field-names";
import { FormProps } from "../../ui/form";

export const dto = z.object({
  [fieldNames.PROBLEMS_LIST]: zodRequiredField()
    .array()
    .nonempty(zodMessages.required),
  [fieldNames.PROBLEMS_GOAL]: zodRequiredField()
    .array()
    .nonempty(zodMessages.required),
  [fieldNames.PROBLEMS_PRIORITY]: zodRequiredField()
    .array()
    .nonempty(zodMessages.required),
});

export const resolver = zodResolver(dto);

export const getResolver = (name: FormProps["name"]) => {
  const dto = z.object({
    [name]: zodRequiredField().array().nonempty(zodMessages.required),
  });
  return zodResolver(dto);
};
