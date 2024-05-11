"use client";
import { Button } from "@/ui/button";
import { CardContent, CardFooter } from "@/ui/card";
import { Input } from "@/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/ui/form";
import {
  RestorePasswordDto,
  RestorePasswordFormReturn,
} from "../model/types/login-schema";
import { useRestorePasswordStore } from "../model/store/restore-password";
import { selectRestorePasswordLoading } from "../model/selectors/restore-password";
import { NavigateBackIcon } from "@/entities/navigation-back";

interface RestorePasswordProps extends RestorePasswordFormReturn {
  onSubmit: (v: RestorePasswordDto) => void;
}

export default function RestorePasswordForm({
  onSubmit,
  ...form
}: RestorePasswordProps) {
  const loading = useRestorePasswordStore(selectRestorePasswordLoading);
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
            >
              Вернуться назад
            </NavigateBackIcon>
          </CardFooter>
        </form>
      </Form>
    </>
  );
}
