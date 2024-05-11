export enum ProcessesEnum {
  FIRST = "restore",
  SECOND = "confirm-email",
}

export const ProcessesQueue = Object.values(ProcessesEnum);
