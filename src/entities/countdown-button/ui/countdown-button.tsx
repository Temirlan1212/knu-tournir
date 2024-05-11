"use client";
import { Button, ButtonProps } from "@/shared/ui/button";
import {
  CountdownStoreProps,
  formatTime,
  useCountdownStore,
} from "../model/store/countdown";
import { Timer } from "lucide-react";
import { cn } from "@/shared/lib/classnames";

export interface CountdownButtonProps extends ButtonProps {
  timer?: number;
  slots?: {
    textContent?: (v: CountdownStoreProps) => React.ReactNode;
  };
}

export default function CountdownButton({
  timer: timerProp,
  children,
  className,
  slots,
  ...props
}: CountdownButtonProps) {
  const countdownStore = useCountdownStore();

  return (
    <Button
      size="lg"
      variant="defaultGhost"
      className={cn("flex gap-4 items-center", className)}
      disabled={countdownStore.seconds > 0}
      onClick={() => countdownStore.startCountdown()}
      {...props}
    >
      <div>
        {slots?.textContent ? slots?.textContent(countdownStore) : children}
      </div>
      <div className="flex items-center justify-center gap-1">
        <Timer size="16" />
        <div className="mt-[1px]">{`00:${formatTime({
          seconds: countdownStore.seconds,
        })}`}</div>
      </div>
    </Button>
  );
}
