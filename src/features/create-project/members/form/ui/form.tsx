"use client";
import { Button } from "@/ui/button";
import { CardContent, CardFooter } from "@/ui/card";
import { Form, FormField, FormMessage } from "@/ui/form";
import { Dto, FormReturn } from "../model/types";
import { fieldNames } from "@/shared/constants/field-names";
import { MemberCard } from "@/entities/member-card";
import { imagePaths } from "@/shared/constants/image-paths";
import { cn } from "@/shared/lib/classnames";

interface FormProps extends FormReturn {
  onSubmit?: (v: Dto) => void;
  loading?: boolean;
  submitButtonText?: string;
}
const { illustrations } = imagePaths;
const { wallet, rocket, thunder } = illustrations;

export default function FormComponent({
  onSubmit,
  loading,
  submitButtonText,
  ...form
}: FormProps) {
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={onSubmit ? form.handleSubmit(onSubmit) : () => {}}
          className="flex flex-col gap-4 w-full items-center"
        >
          <CardContent className="px-0 flex flex-col gap-2 pb-2 items-center">
            <FormField
              control={form.control}
              name={fieldNames.MEMBERS_TYPE}
              render={({ field }) => {
                const value = field.value;
                const handleChange = (v: string) => {
                  if (v === value) field.onChange("");
                  else field.onChange(v);
                };
                return (
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-3 flex-wrap overflow-auto">
                      <MemberCard
                        alt="sdf"
                        src={wallet}
                        title={"1–10 человек"}
                        description={"Небольшая команда"}
                        className={cn(
                          "min-w-[240px] h-[235px] border-2 flex-grow",
                          value === wallet && "border-foreground"
                        )}
                        onClick={() => handleChange(wallet)}
                      />
                      <MemberCard
                        alt="sdf"
                        src={thunder}
                        title={"1–10 человек"}
                        description={"Небольшая команда"}
                        className={cn(
                          "min-w-[240px] h-[235px] border-2 flex-grow",
                          value === thunder && "border-foreground"
                        )}
                        onClick={() => handleChange(thunder)}
                      />
                      <MemberCard
                        alt="sdf"
                        src={rocket}
                        title={"1–10 человек"}
                        description={"Небольшая команда"}
                        className={cn(
                          "min-w-[240px] h-[235px] border-2 flex-grow",
                          value === rocket && "border-foreground"
                        )}
                        onClick={() => handleChange(rocket)}
                      />
                    </div>
                    <FormMessage />
                  </div>
                );
              }}
            />
          </CardContent>

          <CardFooter className="p-0 flex flex-col gap-2 max-w-[420px] w-full">
            <Button
              type="submit"
              className="w-full"
              loading={!!loading}
              size="lg"
            >
              {submitButtonText ? submitButtonText : "Далее"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </>
  );
}
