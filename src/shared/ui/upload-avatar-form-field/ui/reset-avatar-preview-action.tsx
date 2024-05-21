"use client";
import { cn } from "@/shared/lib/classnames";
import { X } from "lucide-react";

export interface ResetAvatarPreviewProps {
  resetPreview: () => void;
  className?: string;
}

export function ResetAvatarPreviewAction({
  resetPreview,
  className,
}: ResetAvatarPreviewProps) {
  return (
    <X
      className={cn(
        "cursor-pointer absolute border z-10 bg-muted rounded-full p-[2px]",
        className
      )}
      size={23}
      onClick={resetPreview}
    />
  );
}
