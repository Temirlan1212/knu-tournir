"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import RegistrationForm from "./registration-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Card } from "@/shared/ui/card";
import { useRegistrationStore } from "../model/store/registration";
import { selectRegistrationSetLoading } from "../model/selectors/registration";
import { RegistrationDto } from "../model/types/registration";
import { registrationDto } from "../model/dto/registration";
import { AuthCardHeader } from "@/entities/auth-card-header";
import { paths } from "@/shared/routing";
import { toast } from "@/ui/use-toast";

interface RegistrationCardProps {
  onSubmitSuccess?: () => void;
}

export default function RegistrationCard({
  onSubmitSuccess,
}: RegistrationCardProps) {
  const setLoading = useRegistrationStore(selectRegistrationSetLoading);

  const router = useRouter();
  const form = useForm<RegistrationDto>({
    resolver: zodResolver(registrationDto),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
    },
  });

  const { setError } = form;

  async function onSubmit(data: RegistrationDto) {
    setLoading("loading");

    const res = await fetch(`api/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      const email = data?.data?.email;
      const non_field_errors = data?.data?.non_field_errors;
      if (Array.isArray(non_field_errors)) {
        const errors = non_field_errors.join(" | ");
        toast({
          variant: "destructive",
          title: "Неправильный ввод!",
          description: errors || "Вы не зарегестрировались!",
        });
      } else {
        if (Array.isArray(email)) {
          toast({
            variant: "destructive",
            title: "Такой пользователь уже существует",
            description: email?.[0] || "Вы не зарегестрировались!",
          });
        } else {
          toast({
            variant: "default",
            title: "Посмотрите почту!",
            description:
              "Вам была отправлена ссылка активации на почту, активируйте пожалуйста!",
          });
          form.reset();
        }
      }
    }

    onSubmitSuccess && onSubmitSuccess();
    setLoading("loaded");
  }

  const handleTab = (value: string) => router.push(value);

  return (
    <Tabs
      onValueChange={handleTab}
      defaultValue={paths.register}
      className="max-w-[400px]"
    >
      <Card className="px-[20px] sm:px-[40px] py-[40px] min-h-[500px] max-h-[90dvh] shadow-none border-none overflow-y-auto">
        <AuthCardHeader
          title={<>Вход или регистрация</>}
          description={<>Для продолжения необходимо войти в аккаунт</>}
        />
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={paths.login}>Вход</TabsTrigger>
          <TabsTrigger value={paths.register}>Регистрация</TabsTrigger>
        </TabsList>
        <TabsContent value={paths.register} className="pt-5">
          <RegistrationForm {...form} onSubmit={onSubmit} />
        </TabsContent>
      </Card>
    </Tabs>
  );
}
