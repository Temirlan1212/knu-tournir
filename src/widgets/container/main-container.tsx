import { cn } from "@/shared/lib/classnames";
import { PropsWithChildren } from "react";

export default function Page({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("px-[10px] sm:px-[50px]", className)}>{children}</div>
  );
}
