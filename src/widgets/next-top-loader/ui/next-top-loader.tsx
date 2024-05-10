"use client";
import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";
import { selectThemeConfig, useThemeConfig } from "@/features/theme";
import { DefaultThemes } from "@/shared/constants/theme";
import { useIsMounted } from "@/shared/lib/hooks/useIsMounted";
export default function Page() {
  const { isMounted } = useIsMounted();
  const { theme } = useTheme();
  const mode = useThemeConfig(selectThemeConfig);
  const dark = mode.dark || DefaultThemes.dark;
  if (!isMounted) return null;

  return <NextTopLoader color={theme === dark ? "red" : "black"} />;
}
