import { restorePasswordDto } from "../dto/restore-password";
import * as z from "zod";
import { UseFormReturn } from "react-hook-form";

export type RestorePasswordDto = z.infer<typeof restorePasswordDto>;
export type RestorePasswordFormReturn = UseFormReturn<RestorePasswordDto>;
