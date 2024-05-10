import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeConfigStore } from "../types/theme-config";
import { DefaultThemes } from "@/shared/constants/theme";

export const useThemeConfig = create<ThemeConfigStore>()(
  persist(
    (set, get) => ({
      config: {
        light: DefaultThemes["light"],
        dark: DefaultThemes["dark"],
      },
      updateConfig: (config) => {
        set({
          config: { ...get().config, ...config },
        });
      },
    }),
    {
      name: "theme-config",
    }
  )
);
