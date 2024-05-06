import { notFound } from "next/navigation";
import { locales } from "@/shared/config/i18n/navigation";

export const getRequestConfig = async ({ locale }: { locale: any }) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`@/public/locales/${locale}.json`)).default,
  };
};
