"use client";

import React from "react";
import { NextIntlClientProvider as IntlClientProvider } from "next-intl";

/**
 * next-intl: next.js internationalization library
 * todo: fix compatibility with `next dev --turbo`
 * @see https://next-intl-docs.vercel.app
 */

export default function NextIntlClientProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <IntlClientProvider
      onError={() => {}}
      getMessageFallback={({ error, key, namespace }) => {
        const nestedMessages = messages?.[namespace || ""] || [];
        if (!nestedMessages) return key;
        if (error.code === "MISSING_MESSAGE") return nestedMessages["default"];
        return nestedMessages[key];
      }}
      locale={locale}
      messages={messages}
    >
      {children}
    </IntlClientProvider>
  );
}
