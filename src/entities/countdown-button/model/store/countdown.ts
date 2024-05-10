import { create } from "zustand";

export const formatTime = ({
  days,
  hours,
  minutes,
  seconds,
}: Partial<TimeProps>): string => {
  const pad = (value: number | undefined): string =>
    value !== undefined ? (value < 10 ? `0${value}` : `${value}`) : "";

  const formattedDays = pad(days);
  const formattedHours = pad(hours);
  const formattedMinutes = pad(minutes);
  const formattedSeconds = pad(seconds);

  if (formattedDays && formattedHours && formattedMinutes && formattedSeconds) {
    return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  if (formattedHours && formattedMinutes && formattedSeconds) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  if (formattedHours && formattedMinutes) {
    return `${formattedHours}:${formattedMinutes}`;
  }
  if (formattedMinutes && formattedSeconds) {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  return `${formattedSeconds}`;
};

interface TimeProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownStoreProps extends TimeProps {
  expired: boolean;
  intervalIds: NodeJS.Timeout[];
  startCountdown: (countDownDate?: Date, ms?: number) => void;
}

export const getDateInSeconds = (seconds: number) => {
  const countDownDate = new Date();
  countDownDate.setSeconds(countDownDate.getSeconds() + seconds);
  return countDownDate;
};

const initCountdownStoreState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: false,
  intervalIds: [],
};

export const useCountdownStore = create<CountdownStoreProps>((set, get) => ({
  ...initCountdownStoreState,
  startCountdown: (countDownDate: Date = getDateInSeconds(60), ms = 1000) => {
    const resetCountdown = () => {
      const intervalIds = get().intervalIds;
      intervalIds.map((id) => clearInterval(id));
      set({ ...initCountdownStoreState });
    };

    const updateCountdown = () => {
      const intervalId = get().intervalIds?.[0];
      const now = new Date().getTime();
      const distance = Math.round(countDownDate.getTime() - now);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0 && intervalId) {
        clearInterval(intervalId);
        return;
      }

      set({
        days,
        hours,
        minutes,
        seconds,
        expired: distance < 0,
      });
    };

    resetCountdown();
    const intervalIdInit = setInterval(updateCountdown, 0);
    const intervalId = setInterval(updateCountdown, ms);
    set({ intervalIds: [intervalId, intervalIdInit] });
  },
}));
