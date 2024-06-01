"use client";

import { selectRestorePasswordSetLoading } from "../model/selectors/restore-password";
import { useForm } from "react-hook-form";
import { RestorePasswordDto } from "../model/types/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { restorePasswordDto } from "../model/dto/restore-password";
import { Card, CardContent } from "@/shared/ui/card";
import { AuthCardHeader } from "@/entities/auth-card-header";
import RestorePasswordForm from "./restore-password-form";
import { useRestorePasswordStore } from "../model/store/restore-password";
import { toast } from "@/ui/use-toast";

interface RestorePasswordProps {
  onSubmitSuccess?: (v: RestorePasswordDto) => void;
  email?: string;
}

export default function RestorePassword({
  onSubmitSuccess,
  email,
}: RestorePasswordProps) {
  const setLoading = useRestorePasswordStore(selectRestorePasswordSetLoading);

  const form = useForm<RestorePasswordDto>({
    resolver: zodResolver(restorePasswordDto),
    defaultValues: {
      email: email || "",
    },
  });

  const { setError } = form;

  async function onSubmit(formData: RestorePasswordDto) {
    setLoading("loading");

    const res = await fetch(`api/auth/reset-request`, {
      method: "POST",
      body: JSON.stringify(formData),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    const email = data?.data?.email;

    if (Array.isArray(email)) {
      toast({
        variant: "destructive",
        title: "Такой пользователь не найден!",
        description: email?.[0] || "Вы не зарегестрировались!",
      });
    } else {
      toast({
        variant: "default",
        title: "Посмотрите почту!",
        description: "Вам был отправлен код на почту!",
      });
      onSubmitSuccess && onSubmitSuccess(formData);
    }
    setLoading("loaded");
  }

  return (
    <Card className="relative px-[20px] max-w-[400px] sm:px-[40px] py-[40px] min-h-[400px] max-h-[90dvh] shadow-none border-none overflow-y-auto flex flex-col justify-between gap-5">
      <AuthCardHeader
        title={<>Смена пароля</>}
        description={
          <>
            Укажите почту, с которой вы регистрировались. Мы вышлем ссылку
            для смены пароля.
          </>
        }
      />
      <CardContent className="p-0">
        <RestorePasswordForm {...form} onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}
