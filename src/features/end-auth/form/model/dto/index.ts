import * as z from "zod";
import {
  zodRequiredField,
  zodRequiredFielField,
} from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const dto = z.object({
  inputName: zodRequiredField(),
  image: zodRequiredFielField(),
});

export const resolver = zodResolver(dto);
