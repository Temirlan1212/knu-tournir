import * as z from "zod";

enum MinMax {
  passwordMin = 6,
  passwordMax = 50,
  mailMin = 2,
  mailMax = 50,
}

export const loginDto = z.object({
  password: z
    .string()
    .min(
      MinMax.passwordMin,
      `Строка должна содержать не менее ${MinMax.passwordMin} символов`
    )
    .max(
      MinMax.passwordMax,
      `Строка должна содержать не более ${MinMax.passwordMax} символов`
    ),
  mail: z
    .string()
    .email("Введите валидный email")
    .min(
      MinMax.mailMin,
      `Строка должна содержать не менее ${MinMax.mailMin} символов`
    )
    .max(
      MinMax.mailMax,
      `Строка должна содержать не более ${MinMax.mailMax} символов`
    ),
});
