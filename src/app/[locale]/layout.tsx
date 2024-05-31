import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProviderWrapper } from "../providers/next-intl-provider";
import { ThemeProvider } from "next-themes";
import { DefaultThemes, Themes, ThemesEnum } from "@/shared/constants/theme";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { NextTopLoader } from "@/widgets/next-top-loader";
import { Toaster } from "@/ui/toaster";
import { getServerSession } from "next-auth";
import NextAuthProvider from "@/app/providers/next-auth-provider";
import { options } from "../api/auth/[...nextauth]/options";

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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const session = await getServerSession(options);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme={DefaultThemes["light"]}
            enableSystem
            themes={Themes}
          >
            <TooltipProvider>
              <NextIntlClientProviderWrapper locale={locale}>
                <NextTopLoader />
                {children}
                <Toaster />
              </NextIntlClientProviderWrapper>
            </TooltipProvider>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
