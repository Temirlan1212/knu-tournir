export enum ProcessesEnum {
  FIRST = "signup",
  SECOND = "confirm-email",
}

export const ProcessesQueue = Object.values(ProcessesEnum);
