"use client";
import { Button, ButtonProps } from "@/shared/ui/button";
import { formatTime, useCountdownStore } from "../model/store/countdown";
import { Timer } from "lucide-react";
import { cn } from "@/shared/lib/classnames";

export interface CountdownButtonProps extends ButtonProps {
  timer: number;
}

export default function CountdownButton({
  timer: timerProp,
  children,
  className,
  ...props
}: CountdownButtonProps) {
  const { seconds } = useCountdownStore();

  return (
    <Button
      variant="defaultGhost"
      className={cn("flex gap-4 items-center", className)}
      {...props}
    >
      <div>{children}</div>
      <div className="flex items-center justify-center gap-1">
        <Timer size="16" />
        <div className="mt-[1px]">{`00:${formatTime({ seconds })}`}</div>
      </div>
    </Button>
  );
}
