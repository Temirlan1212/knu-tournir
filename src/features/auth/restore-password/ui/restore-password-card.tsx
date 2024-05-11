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

interface RestorePasswordProps {
  onSubmitSuccess?: () => void;
}

export default function RestorePassword({
  onSubmitSuccess,
}: RestorePasswordProps) {
  const setLoading = useRestorePasswordStore(selectRestorePasswordSetLoading);

  const form = useForm<RestorePasswordDto>({
    resolver: zodResolver(restorePasswordDto),
    defaultValues: {
      inputEmail: "",
    },
  });

  const { setError } = form;

  async function onSubmit(data: RestorePasswordDto) {
    setLoading("loading");
    onSubmitSuccess && onSubmitSuccess();
    setLoading("loaded");
  }

  return (
    <Card className="relative px-[20px] sm:px-[40px] py-[40px] min-h-[400px] max-h-[90dvh] shadow-none border-none overflow-y-auto flex flex-col justify-between gap-5">
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
