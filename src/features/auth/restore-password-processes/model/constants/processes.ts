export enum ProcessesEnum {
  FIRST = "restore",
  SECOND = "confirm-email",
  THIRD = "reset",
}

export const ProcessesQueue = Object.values(ProcessesEnum);
