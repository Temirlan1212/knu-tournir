import * as z from "zod";

export const zodMessages = {
  validEmail: "Введите валидный email",
  required: "Это поле обязательное",
  passwordShouldMatch: "Пароли должны совпадать",
} as const;

export const zodDynamicMessages = (v: string | number) => {
  return {
    minFieldLength: `Строка должна содержать не менее ${v} символов`,
    maxFieldLength: `Строка должна содержать не более ${v} символов`,
  } as const;
};

export const zodValidateMinMax = (min: number, max: number) =>
  z
    .string()
    .min(min, zodDynamicMessages(min).minFieldLength)
    .max(max, zodDynamicMessages(max).maxFieldLength);

export const zodRequiredField = () => z.string().min(1, zodMessages.required);
export const zodRequiredFielField = () =>
  z.record(z.any(), { message: zodMessages.required }).nullable();
