"use client";
import { Button } from "@/ui/button";
import { Card, CardContent, CardFooter } from "@/ui/card";
import { Form, FormField } from "@/ui/form";
import { NavigateBackIcon } from "@/entities/navigation-back";
import {
  FormFloatingLabelInput,
  FormFloatingPasswordLabelInput,
} from "@/ui/input/form-floating-label-input";

import {
  zodRequiredField,
  zodMessages,
  zodValidateMinMax,
} from "@/shared/config/zod/schema";
import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { LoadingStatus } from "@/shared/lib/types/loading";
import { toast } from "@/ui/use-toast";
import { AuthCardHeader } from "@/entities/auth-card-header";

export const dto = z
  .object({
    email: zodRequiredField().email(zodMessages.validEmail),
    password: zodValidateMinMax(8, 1000),
    password2: zodValidateMinMax(8, 1000),
  })
  .refine(
    (values) => {
      return values.password === values.password2;
    },
    {
      message: zodMessages.passwordShouldMatch,
      path: ["password2"],
    }
  );

export const registrationDto = z.object({
  first_name: zodRequiredField(),
  email: zodRequiredField().email(zodMessages.validEmail),
  last_name: zodRequiredField(),
});

export type Dto = z.infer<typeof dto>;
export type FormReturn = UseFormReturn<Dto>;

interface Props {
  onSubmitSuccess?: () => void;
  onBack?: () => void;
  email?: string;
}

export default function FormPage({ email, onSubmitSuccess, onBack }: Props) {
  const [loading, setLoading] = useState<LoadingStatus>("init");
  const form = useForm<Dto>({
    resolver: zodResolver(dto),
    values: {
      email: email || "",
      password: "",
      password2: "",
    },
    defaultValues: {
      email: email || "",
      password: "",
      password2: "",
    },
  });

  const { setError } = form;

  async function onSubmit(formData: Dto) {
    setLoading("loading");

    const res = await fetch(`api/auth/reset`, {
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
        title: "Такой email не найден!",
        description: email?.[0] || "Проверьте почту еще раз!",
      });
    } else {
      toast({
        variant: "default",
        title: "Пароль успешно обновлен!",
        // description: "Вам был отправлен код на почту!",
      });
      form.reset();
      onSubmitSuccess && onSubmitSuccess();
    }
    setLoading("loaded");
  }

  return (
    <>
      <Card className="relative px-[20px] max-w-[400px] sm:px-[40px] py-[40px] min-h-[400px] max-h-[90dvh] shadow-none border-none overflow-y-auto flex flex-col justify-between gap-5">
        <AuthCardHeader
          title={<>Смена пароля</>}
          description={<>Подтвердите код!</>}
        />
        <CardContent className="p-0">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <CardContent className="px-0 flex flex-col gap-2 pt-0 pb-2">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={(props) => (
                      <FormFloatingLabelInput label="Почта *" {...props} />
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={(props) => (
                      <FormFloatingPasswordLabelInput
                        label="Новый пароль *"
                        {...props}
                      />
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password2"
                    render={(props) => (
                      <FormFloatingPasswordLabelInput
                        label="Повторите пароль *"
                        {...props}
                      />
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-0 flex flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full"
                  loading={loading === "loading"}
                  size="lg"
                >
                  Сменить пароль
                </Button>
                <NavigateBackIcon
                  type="button"
                  className="w-full"
                  size="lg"
                  variant="ghost"
                  onClick={() => {
                    onBack && onBack();
                  }}
                >
                  Вернуться назад
                </NavigateBackIcon>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
