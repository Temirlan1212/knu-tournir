"use client";

import { CountdownButton } from "@/entities/countdown-button";
import { NavigateBackIcon } from "@/entities/navigation-back";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import Logo from "@/shared/ui/logo";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ConfirmEmailCard() {
  return (
    <Card className="relative px-[20px] sm:px-[40px] py-[40px] min-h-[480px] max-h-[90dvh] shadow-none border-none overflow-y-auto flex flex-col justify-between">
      <CardHeader className="px-0 pt-0">
        <Link href={"/"} className="w-full flex justify-center">
          <Logo />
        </Link>
        <CardTitle className="text-2xl text-center">
          Вход или регистрация
        </CardTitle>
        <CardDescription className="text-center">
          Для продолжения необходимо войти в аккаунт
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <Mail size="100" className="m-auto" />
      </CardContent>

      <CardFooter className="p-0 flex flex-col gap-2">
        <CountdownButton className="w-full">Отправить повторно</CountdownButton>
        <NavigateBackIcon className="w-full" size="lg" variant="ghost">
          Вернуться назад
        </NavigateBackIcon>
      </CardFooter>
    </Card>
  );
}
