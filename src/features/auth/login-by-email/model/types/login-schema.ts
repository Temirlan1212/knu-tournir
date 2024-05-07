import { loginDto } from "../dto/login";
import * as z from "zod";
import { UseFormReturn } from "react-hook-form";

export type LoginDto = z.infer<typeof loginDto>;
export type LoginFormReturn = UseFormReturn<LoginDto>;
