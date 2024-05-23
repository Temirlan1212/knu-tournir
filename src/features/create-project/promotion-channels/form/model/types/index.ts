import { UseFormReturn } from "react-hook-form";
import { dto } from "../dto";
import { z } from "zod";

export type Dto = z.infer<typeof dto>;
export type FormReturn = UseFormReturn<Dto>;
