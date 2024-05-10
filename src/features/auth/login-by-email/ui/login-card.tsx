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
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import Logo from "@/shared/ui/logo";
import Link from "next/link";
import { Button } from "@/shared/ui/button";

export default function LoginCard() {
  const setLoading = useLoginStore(selectLoginSetLoading);

  const router = useRouter();
  const form = useForm<LoginDto>({
    resolver: zodResolver(loginDto),
    defaultValues: {
      inputEmail: "",
      inputPassword: "",
    },
  });

  const { setError } = form;

  async function onSubmit(data: LoginDto) {
    setLoading("loading");
    router.push("/dashboard/manage");
    setLoading("loaded");
  }

  const handleTab = (value: string) => router.push(value);

  return (
    <Tabs
      onValueChange={handleTab}
      defaultValue="login"
      className="max-w-[400px]"
    >
      <Card className="relative px-[20px] sm:px-[40px] py-[40px] min-h-[480px] max-h-[700px] shadow-none border-none overflow-y-auto">
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
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Вход</TabsTrigger>
          <TabsTrigger value="register">Регистрация</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="pt-5">
          <LoginForm {...form} onSubmit={onSubmit} />
        </TabsContent>
      </Card>
    </Tabs>
  );
}
