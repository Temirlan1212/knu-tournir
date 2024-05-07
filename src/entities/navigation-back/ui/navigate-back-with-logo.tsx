import Logo from "@/shared/ui/logo";
import NavigateBackIcon from "./navigate-back-icon";
import { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/classnames";

export default function NavigateBackWithLogo({
  children,
  className,
}: PropsWithChildren<{ className: string }>) {
  return (
    <div className={cn("flex gap-3", className)}>
      <NavigateBackIcon />
      <Logo />
      {children}
    </div>
  );
}
