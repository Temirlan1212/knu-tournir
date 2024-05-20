import * as z from "zod";
import { zodRequiredField } from "@/shared/config/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const dto = z.object({
  inputName: zodRequiredField(),
});

export const resolver = zodResolver(dto);
