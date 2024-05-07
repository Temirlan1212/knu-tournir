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
import { Card, CardHeader, CardTitle } from "@/shared/ui/card";

export default function LoginCard() {
  const setLoading = useLoginStore(selectLoginSetLoading);

  const router = useRouter();
  const form = useForm<LoginDto>({
    resolver: zodResolver(loginDto),
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  const { setError } = form;

  async function onSubmit(data: LoginDto) {
    console.log(data);
    setLoading("loading");

    setLoading("loaded");
  }

  const handleTab = (value: string) => router.push(value);

  return (
    <Tabs onValueChange={handleTab} defaultValue="login" className="w-[400px]">
      <Card className="px-[40px] py-[40px] max-h-[700px] shadow-none border-none overflow-y-auto">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-2xl text-center">
            Вход или регистрация
          </CardTitle>
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
