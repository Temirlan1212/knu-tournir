"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import RegistrationForm from "./registration-form";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Card, CardHeader, CardTitle } from "@/shared/ui/card";
import { useRegistrationStore } from "../model/store/registration";
import { selectRegistrationSetLoading } from "../model/selectors/registration";
import { RegistrationDto } from "../model/types/registration";
import { registrationDto } from "../model/dto/registration";
import Link from "next/link";
import Logo from "@/shared/ui/logo";

export default function LoginCard() {
  const setLoading = useRegistrationStore(selectRegistrationSetLoading);

  const router = useRouter();
  const form = useForm<RegistrationDto>({
    resolver: zodResolver(registrationDto),
    defaultValues: {
      inputEmail: "",
      inputPassword: "",
      inputName: "",
      inputPhone: "",
      inputPasswordConfirm: "",
    },
  });

  const { setError } = form;

  async function onSubmit(data: RegistrationDto) {
    setLoading("loading");

    setLoading("loaded");
  }

  const handleTab = (value: string) => router.push(value);

  return (
    <Tabs
      onValueChange={handleTab}
      defaultValue="register"
      className="max-w-[400px]"
    >
      <Card className="px-[20px] sm:px-[40px] py-[40px] min-h-[500px] max-h-[700px] shadow-none border-none overflow-y-auto">
        <CardHeader className="px-0 pt-0">
          <Link href={"/"} className="w-full flex justify-center">
            <Logo />
          </Link>
          <CardTitle className="text-2xl text-center">
            Вход или регистрация
          </CardTitle>
        </CardHeader>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Вход</TabsTrigger>
          <TabsTrigger value="register">Регистрация</TabsTrigger>
        </TabsList>
        <TabsContent value="register" className="pt-5">
          <RegistrationForm {...form} onSubmit={onSubmit} />
        </TabsContent>
      </Card>
    </Tabs>
  );
}
