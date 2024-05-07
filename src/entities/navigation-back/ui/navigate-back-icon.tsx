import { Button, ButtonProps } from "@/shared/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavigateBackIcon(props: ButtonProps) {
  const router = useRouter();
  const navigateBack = () => router.back();
  return (
    <Button
      size="icon"
      variant="defaultGhost"
      onClick={navigateBack}
      {...props}
    >
      <ArrowLeft />
    </Button>
  );
}
