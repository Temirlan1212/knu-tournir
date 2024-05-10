import { useThemeConfig } from "../store/theme-config";
import { useTheme } from "next-themes";
import { selectThemeConfig } from "../selectors/theme";
import { DefaultThemes } from "@/shared/constants/theme";

export function useToggleTheme() {
  const { setTheme, theme } = useTheme();
  const mode = useThemeConfig(selectThemeConfig);
  const dark = mode.dark || DefaultThemes["dark"];
  const light = mode.light || DefaultThemes["light"];

  const toggleTheme = () => setTheme(theme === light ? dark : light);

  return { toggleTheme, theme };
}
