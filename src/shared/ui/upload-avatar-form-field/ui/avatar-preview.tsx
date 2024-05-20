"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { Camera } from "lucide-react";
import { cn } from "@/shared/lib/classnames";

export interface AvatarPreviewProps {
  preview: string;
  isError: boolean;
  onClick: () => void;
}

export function AvatarPreview({
  preview,
  isError,
  onClick,
}: AvatarPreviewProps) {
  return (
    <Avatar
      className={cn(
        "w-24 h-24 cursor-pointer border",
        isError && "border-destructive"
      )}
      onClick={onClick}
    >
      <AvatarImage src={preview} className="object-contain" />
      <AvatarFallback>
        <Camera className={cn(isError && "text-destructive")} />
      </AvatarFallback>
    </Avatar>
  );
}
