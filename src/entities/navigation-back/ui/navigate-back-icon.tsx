import { cn } from "@/shared/lib/classnames";
import { Button, ButtonProps } from "@/shared/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavigateBackIcon({
  children,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const router = useRouter();
  return (
    <Button
      size="icon"
      variant="defaultGhost"
      onClick={(e) => {
        onClick ? onClick(e) : router.back();
      }}
      className={cn("flex gap-2", className)}
      {...props}
    >
      <ChevronLeft />
      <p>{children}</p>
    </Button>
  );
}
