"use client";
import { Button } from "@/ui/button";
import { CardContent, CardFooter } from "@/ui/card";
import { Form, FormField } from "@/ui/form";
import { LoginDto, LoginFormReturn } from "../model/types/login-schema";
import { useLoginStore } from "../model/store/login";
import { selectLoginLoading } from "../model/selectors/login";
import Link from "next/link";
import {
  FormFloatingLabelInput,
  FormFloatingPasswordLabelInput,
} from "@/ui/form-floating-label-input";
interface LoginFormProps extends LoginFormReturn {
  onSubmit: (v: LoginDto) => void;
}
export default function LoginForm({ onSubmit, ...form }: LoginFormProps) {
  const loading = useLoginStore(selectLoginLoading);
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <CardContent className="px-0 flex flex-col gap-2 pt-0 pb-2">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="inputEmail"
                render={(props) => (
                  <FormFloatingLabelInput label="Почта *" {...props} />
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="inputPassword"
                render={(props) => (
                  <FormFloatingPasswordLabelInput label="Пароль *" {...props} />
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
              Войти через почту
            </Button>
            <Link href="/restore-password" className="w-full">
              <Button
                type="button"
                variant="ghost"
                className="w-full text-muted-foreground"
                size="lg"
              >
                Забыли пароль?
              </Button>
            </Link>
          </CardFooter>
        </form>
      </Form>
    </>
  );
}
