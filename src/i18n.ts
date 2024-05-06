import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const config = import("@/shared/config/i18n");
  return (await config).getRequestConfig({ locale });
});
