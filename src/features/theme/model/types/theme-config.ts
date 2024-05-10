import {
  DarkThemesEnum,
  DefaultThemes,
  LightThemesEnum,
} from "@/shared/constants/theme";
import { ValueOf } from "next/dist/shared/lib/constants";

export interface ThemeConfigStore {
  config: {
    light?: ValueOf<typeof LightThemesEnum> | ValueOf<typeof DefaultThemes>;
    dark?: ValueOf<typeof DarkThemesEnum> | ValueOf<typeof DefaultThemes>;
  };
  updateConfig: (v: ThemeConfigStore["config"]) => void;
}
