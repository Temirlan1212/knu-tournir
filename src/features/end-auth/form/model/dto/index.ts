import * as z from "zod";
import {
  zodRequiredField,
  zodRequiredFielField,
} from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const dtoFieldNames = {
  INPUT_NAME: "inputName",
  IMAGE: "image",
};

export const dto = z.object({
  [dtoFieldNames.INPUT_NAME]: zodRequiredField(),
  [dtoFieldNames.IMAGE]: zodRequiredFielField(),
});

export const resolver = zodResolver(dto);
