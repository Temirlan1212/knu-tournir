export enum RegistrationProcessesEnum {
  FIRST = "signup",
  SECOND = "confirm-email",
}

export const RegistrationProcessesQueue = Object.values(
  RegistrationProcessesEnum
);
