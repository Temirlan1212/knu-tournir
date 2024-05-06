"use client";

import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return <div>{t("Home")}</div>;
}
