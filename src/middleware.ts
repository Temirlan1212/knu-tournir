import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "@/shared/config/i18n";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
