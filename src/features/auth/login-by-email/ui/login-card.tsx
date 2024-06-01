"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import LoginForm from "./login-form";
import { useLoginStore } from "../model/store/login";
import { selectLoginSetLoading } from "../model/selectors/login";
import { LoginDto } from "../model/types/login-schema";
import { loginDto } from "../model/dto/login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Card } from "@/shared/ui/card";
import { AuthCardHeader } from "@/entities/auth-card-header";
import { paths } from "@/shared/routing";
import { signIn } from "next-auth/react";
import { toast } from "@/ui/use-toast";

export default function LoginCard() {
  const setLoading = useLoginStore(selectLoginSetLoading);

  const router = useRouter();
  const form = useForm<LoginDto>({
    resolver: zodResolver(loginDto),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setError } = form;

  async function onSubmit(data: LoginDto) {
    setLoading("loading");

    try {
      const res = await signIn("credentials", { ...data, redirect: false });
      if (res?.ok) {
        router.push(paths.dashboard.manage);
        router.refresh();
      }
      console.log(res);

      if (!res?.ok) {
        toast({
          variant: "destructive",
          title: "Пользователь не найден!",
          description: res?.error || "Вы не авторизовались!",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading("loaded");
  }

  const handleTab = (value: string) => router.push(value);

  return (
    <Tabs
      onValueChange={handleTab}
      defaultValue={paths.login}
      className="max-w-[400px]"
    >
      <Card className="relative px-[20px] sm:px-[40px] py-[40px] min-h-[480px] max-h-[90dvh] shadow-none border-none overflow-y-auto">
        <AuthCardHeader
          title={<>Вход или регистрация</>}
          description={<>Для продолжения необходимо войти в аккаунт</>}
        />
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={paths.login}>Вход</TabsTrigger>
          <TabsTrigger value={paths.register}>Регистрация</TabsTrigger>
        </TabsList>
        <TabsContent value={paths.login} className="pt-5">
          <LoginForm {...form} onSubmit={onSubmit} />
        </TabsContent>
      </Card>
    </Tabs>
  );
}
