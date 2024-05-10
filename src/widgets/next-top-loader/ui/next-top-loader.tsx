"use client";
import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";
import { selectThemeConfig, useThemeConfig } from "@/features/theme";
import { DefaultThemes } from "@/shared/constants/theme";
export default function Page() {
  const { theme } = useTheme();
  const mode = useThemeConfig(selectThemeConfig);
  const dark = mode.dark || DefaultThemes.dark;

  return <NextTopLoader color={theme === dark ? "red" : "black"} />;
}
