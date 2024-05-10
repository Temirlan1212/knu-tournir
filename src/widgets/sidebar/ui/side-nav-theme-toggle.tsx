"use client";
import { Moon, Sun } from "lucide-react";
import { NavItem, NavItemProps } from "./side-nav-item";
import { cn } from "@/shared/lib/classnames";
import { ThemesEnum } from "@/shared/constants/theme";
import { useToggleTheme } from "@/features/theme";

export function SideNavThemeToggle({ className, ...props }: NavItemProps) {
  const { toggleTheme, theme } = useToggleTheme();

  return (
    <div onClick={toggleTheme}>
      <NavItem
        {...props}
        item={{
          title: theme === ThemesEnum.DARK ? "Светлая" : "Тёмная",
          icon: theme === ThemesEnum.DARK ? Sun : Moon,
          path: {},
        }}
        className={cn(className)}
      />
    </div>
  );
}
