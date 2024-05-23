"use client";
import { Button } from "@/ui/button";
import { CardContent, CardFooter } from "@/ui/card";
import { Form, FormField, FormMessage } from "@/ui/form";
import { Dto, FormReturn } from "../model/types";
import { fieldNames } from "@/shared/constants/field-names";

interface FormProps extends FormReturn {
  onSubmit?: (v: Dto) => void;
  loading?: boolean;
  submitButtonText?: string;
}

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
          <CardContent className="px-0 flex flex-col gap-2 pb-2 items-center w-full">
            <FormField
              control={form.control}
              name={fieldNames.PROMOTION_CHANNELS_PLATFORMS}
              render={({ field }) => {
                const value = field.value;
                const handleChange = (v: string) => {
                  if (v === value) field.onChange("");
                  else field.onChange(v);
                };
                return (
                  <div className="flex flex-col items-center gap-1 w-full">
                    <div className="w-full"></div>
                    <FormMessage />
                  </div>
                );
              }}
            />

            <FormField
              control={form.control}
              name={fieldNames.PROMOTION_CHANNELS_SOCIAL_MEDIA}
              render={({ field }) => {
                const value = field.value;
                const handleChange = (v: string) => {
                  if (v === value) field.onChange("");
                  else field.onChange(v);
                };
                return (
                  <div className="flex flex-col items-center gap-1">
                    <FormMessage />
                  </div>
                );
              }}
            />

            <FormField
              control={form.control}
              name={fieldNames.PROMOTION_CHANNELS_OFFLINE_EVENTS}
              render={({ field }) => {
                const value = field.value;
                const handleChange = (v: string) => {
                  if (v === value) field.onChange("");
                  else field.onChange(v);
                };
                return (
                  <div className="flex flex-col items-center gap-1">
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
