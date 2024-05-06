import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import NextIntlClientProvider from "./next-intl-client-provider";
import { locales } from "@/shared/config/i18n";

export default async function NextIntlClientProviderWrapper({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  if (!locales.includes(locale as any)) notFound();

  let messages: any;
  try {
    const config = import("@/shared/config/i18n");
    messages = (await (await config).getRequestConfig({ locale })).messages;
  } catch (error) {
    console.error("Error loading internationalization messages", error);
    notFound();
  }

  unstable_setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
