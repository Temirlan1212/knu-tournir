"use client";
import { Button } from "@/ui/button";
import { CardContent, CardDescription, CardFooter } from "@/ui/card";
import { Form, FormField } from "@/ui/form";
import {
  RegistrationDto,
  RegistrationFormReturn,
} from "../model/types/registration";
import { useRegistrationStore } from "../model/store/registration";
import { selectRegistrationLoading } from "../model/selectors/registration";
import Link from "next/link";
import {
  FormFloatingLabelInput,
  FormFloatingPasswordLabelInput,
} from "@/shared/ui/input/form-floating-label-input";

interface RegistrationFormProps extends RegistrationFormReturn {
  onSubmit: (v: RegistrationDto) => void;
}

export default function RegistrationForm({
  onSubmit,
  ...form
}: RegistrationFormProps) {
  const loading = useRegistrationStore(selectRegistrationLoading);
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <CardContent className="px-0 flex flex-col gap-2 pb-2">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="first_name"
                render={(props) => (
                  <FormFloatingLabelInput label="Имя *" {...props} />
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="last_name"
                render={(props) => (
                  <FormFloatingLabelInput label="Фамилия *" {...props} />
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={(props) => (
                  <FormFloatingLabelInput label="Почта *" {...props} />
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={(props) => (
                  <FormFloatingPasswordLabelInput label="Пароль *" {...props} />
                )}
              />
            </div>

            <div className="grid gap-2">
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
              Зарегистрироваться
            </Button>
          </CardFooter>
          <CardDescription className="text-center">
            Нажимая на кнопку «Зарегистрироваться», вы соглашаетесь с{" "}
            <Link href={""} className="text underline">
              условиями
            </Link>{" "}
            обработки персональных данных
          </CardDescription>
        </form>
      </Form>
    </>
  );
}
