"use client";

import { AuthCardHeader } from "@/entities/auth-card-header";
import { CountdownButton } from "@/entities/countdown-button";
import { NavigateBackIcon } from "@/entities/navigation-back";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";

export interface ConfirmEmailCardProps {
  onBack?: () => void;
}

export default function ConfirmEmailCard({ onBack }: ConfirmEmailCardProps) {
  return (
    <Card className="relative px-[20px] max-w-[400px] sm:px-[40px] py-[40px] min-h-[480px] max-h-[90dvh] shadow-none border-none overflow-y-auto flex flex-col justify-between">
      <AuthCardHeader
        title={<>Подтвердите почту</>}
        description={
          <>
            Ссылка для подтверждения почты отправлена на 
            <Link
              className="text-primary underline"
              href={"mailto:mail@mail.ru"}
            >
              mail@mail.ru
            </Link>
          </>
        }
      />
      <CardContent className="p-0">
        <Mail size="100" className="m-auto" />
      </CardContent>
      <CardFooter className="p-0 flex flex-col gap-2">
        <CountdownButton className="w-full">Отправить повторно</CountdownButton>
        <NavigateBackIcon
          className="w-full"
          size="lg"
          variant="ghost"
          onClick={onBack}
        >
          Вернуться назад
        </NavigateBackIcon>
      </CardFooter>
    </Card>
  );
}
