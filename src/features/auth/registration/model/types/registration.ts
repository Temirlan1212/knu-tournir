import { registrationDto } from "../dto/registration";
import * as z from "zod";
import { UseFormReturn } from "react-hook-form";

export type RegistrationDto = z.infer<typeof registrationDto>;
export type RegistrationFormReturn = UseFormReturn<RegistrationDto>;
