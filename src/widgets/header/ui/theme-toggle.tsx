"use client";
import { useToggleTheme } from "@/features/theme";
import { Button } from "@/shared/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { toggleTheme } = useToggleTheme();

  return (
    <Button
      variant="defaultGhost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-md"
    >
      <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
