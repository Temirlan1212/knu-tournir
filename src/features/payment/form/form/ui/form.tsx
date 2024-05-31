"use client";
import { Button } from "@/ui/button";
import { CardContent, CardFooter } from "@/ui/card";
import { Form, FormField, FormMessage } from "@/ui/form";
import { Dto, FormReturn } from "../model/types";
import { fieldNames } from "@/shared/constants/field-names";
import { SelectMultipleCheckbox } from "@/shared/ui/checkbox";
import { ValueOf } from "next/dist/shared/lib/constants";
import { CheckboxWithLabelAccordionItemDataProps } from "@/entities/checkbox-with-label-accordion";
import { FormFloatingLabelInput } from "@/shared/ui/input";

export interface FormProps extends FormReturn {
  onSubmit?: (v: Dto) => void;
  loading?: boolean;
  submitButtonText?: string;
  data: CheckboxWithLabelAccordionItemDataProps;
}

export default function FormComponent({
  onSubmit,
  loading,
  submitButtonText,
  data,
  ...form
}: FormProps) {
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={onSubmit ? form.handleSubmit(onSubmit) : () => {}}
          className="flex flex-col gap-4 w-full items-center"
        >
          <CardContent className="px-0 flex flex-col gap-2 pb-2 items-center w-full rounded-[10px]">
            <FormField
              control={form.control}
              name={fieldNames.PAYMENT_NUMBER}
              render={(props) => {
                return (
                  <div className="w-full">
                    <FormFloatingLabelInput
                      type="number"
                      label="Номер карты *"
                      {...props}
                    />
                  </div>
                );
              }}
            />

            <FormField
              control={form.control}
              name={fieldNames.PAYMENT_NAME}
              render={(props) => {
                return (
                  <div className="w-full">
                    <FormFloatingLabelInput label="Фио карты *" {...props} />
                  </div>
                );
              }}
            />

            <FormField
              control={form.control}
              name={fieldNames.PAYMENT_EXPIRY}
              render={(props) => {
                return (
                  <div className="w-full">
                    <FormFloatingLabelInput
                      type="number"
                      label="Expiry *"
                      {...props}
                    />
                  </div>
                );
              }}
            />

            <FormField
              control={form.control}
              name={fieldNames.PAYMENT_CVC}
              render={(props) => {
                return (
                  <div className="w-full">
                    <FormFloatingLabelInput
                      type="number"
                      label="Cvc *"
                      {...props}
                    />
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
