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
    onSubmitSuccess && onSubmitSuccess();
    setLoading("loaded");
  }

  const handleTab = (value: string) => router.push(value);

  return (
    <Tabs
      onValueChange={handleTab}
      defaultValue="register"
      className="max-w-[400px]"
    >
      <Card className="px-[20px] sm:px-[40px] py-[40px] min-h-[500px] max-h-[90dvh] shadow-none border-none overflow-y-auto">
        <AuthCardHeader
          title={<>Вход или регистрация</>}
          description={<>Для продолжения необходимо войти в аккаунт</>}
        />
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
