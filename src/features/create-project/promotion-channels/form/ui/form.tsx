"use client";
import { Button } from "@/ui/button";
import { CardContent, CardFooter } from "@/ui/card";
import { Form, FormField, FormMessage } from "@/ui/form";
import { Dto, FormReturn } from "../model/types";
import { fieldNames } from "@/shared/constants/field-names";
import {
  CheckboxWithLabelAccordionItem,
  CheckboxWithLabelAccordionItemDataProps,
} from "@/entities/checkbox-with-label-accordion";
import { Accordion } from "@/shared/ui/accordion";

interface FormProps extends FormReturn {
  onSubmit?: (v: Dto) => void;
  loading?: boolean;
  submitButtonText?: string;
}

const data: CheckboxWithLabelAccordionItemDataProps = [];

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
          <Accordion
            type="single"
            defaultValue="v-1"
            collapsible
            className="w-full"
          >
            <CardContent className="px-0 flex flex-col gap-2 pb-2 items-center w-full">
              <FormField
                control={form.control}
                name={fieldNames.PROMOTION_CHANNELS_PLATFORMS}
                render={({ field }) => {
                  return (
                    <div className="flex flex-col items-center gap-1 w-full">
                      <CheckboxWithLabelAccordionItem
                        accordionValue="v-1"
                        title="Специализированные платформы"
                        data={data}
                        defaultValues={field.value}
                        onChange={field.onChange}
                        slots={{ errorMessage: <FormMessage /> }}
                      />
                    </div>
                  );
                }}
              />
              <FormField
                control={form.control}
                name={fieldNames.PROMOTION_CHANNELS_SOCIAL_MEDIA}
                render={({ field }) => {
                  return (
                    <div className="flex flex-col items-center gap-1 w-full">
                      <CheckboxWithLabelAccordionItem
                        accordionValue="v-2"
                        title="Социальные сети"
                        data={data}
                        defaultValues={field.value}
                        onChange={field.onChange}
                        slots={{ errorMessage: <FormMessage /> }}
                      />
                    </div>
                  );
                }}
              />
              <FormField
                control={form.control}
                name={fieldNames.PROMOTION_CHANNELS_OFFLINE_EVENTS}
                render={({ field }) => {
                  return (
                    <div className="flex flex-col items-center gap-1 w-full">
                      <CheckboxWithLabelAccordionItem
                        accordionValue="v-3"
                        title="Офлайн-мероприятия"
                        data={data}
                        defaultValues={field.value}
                        onChange={field.onChange}
                        slots={{ errorMessage: <FormMessage /> }}
                      />
                    </div>
                  );
                }}
              />
            </CardContent>
          </Accordion>

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
