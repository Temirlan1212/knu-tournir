"use client";

import { NavigateBackIcon } from "@/entities/navigation-back";
import { PropsWithChildren } from "react";

export interface MainComponentProps {
  navigateBack?: boolean;
}

export default function MainComponent({
  navigateBack,
  children,
}: PropsWithChildren<MainComponentProps>) {
  const onNavigateBack = () => {};
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="w-full">
        {!!navigateBack && (
          <NavigateBackIcon variant="ghost" onClick={onNavigateBack}>
            Вернуться назад
          </NavigateBackIcon>
        )}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
