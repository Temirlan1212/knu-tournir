"use client";

import { NavigateBackIcon } from "@/entities/navigation-back";
import { PropsWithChildren } from "react";

export interface MainComponentProps {
  onNavigateBack?: () => void;
}

export default function MainComponent({
  onNavigateBack,
  children,
}: PropsWithChildren<MainComponentProps>) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="w-full">
        <NavigateBackIcon
          disabled={!onNavigateBack}
          variant="ghost"
          onClick={onNavigateBack}
        >
          Вернуться назад
        </NavigateBackIcon>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
