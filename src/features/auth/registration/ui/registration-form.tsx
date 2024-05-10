"use client";
import { Button } from "@/ui/button";
import { CardContent, CardDescription, CardFooter } from "@/ui/card";
import { Input } from "@/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/ui/form";
import {
  RegistrationDto,
  RegistrationFormReturn,
} from "../model/types/registration";
import { useRegistrationStore } from "../model/store/registration";
import { selectRegistrationLoading } from "../model/selectors/registration";
import Link from "next/link";

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
                name="inputName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Имя *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="inputEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Почта *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="inputPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Телефон *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="inputPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="Пароль *"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="inputPasswordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="Повторите пароль *"
                        type="password"
                        color="error"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
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
