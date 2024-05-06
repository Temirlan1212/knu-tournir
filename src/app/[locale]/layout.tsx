import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProviderWrapper } from "../providers/next-intl-provider";
import { ThemeProvider } from "next-themes";
import { Themes } from "@/shared/constants/theme";
import { DashboardHeader, Header } from "@/widgets/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exedrive - Платформа для прокачки маретологов",
  description: "Платформа для обучения маркетологов",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={Themes}
        >
          <NextIntlClientProviderWrapper locale={locale}>
            <div className="h-full">
              {/* <Header /> */}
              <DashboardHeader />
              {children}
            </div>
          </NextIntlClientProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
