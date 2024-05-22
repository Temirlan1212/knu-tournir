"use client";
import { Button } from "@/ui/button";
import { CardContent, CardFooter } from "@/ui/card";
import { Form, FormField } from "@/ui/form";
import { FormFloatingLabelInput } from "@/shared/ui/input/form-floating-label-input";
import { Dto, FormReturn } from "../model/types";
import { fieldNames } from "@/shared/constants/field-names";
import { UploadAvatarFormFieldFormItem } from "@/shared/ui/upload-avatar-form-field";

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
          className="flex flex-col gap-4 w-full"
        >
          <CardContent className="px-0 flex flex-col gap-2 pb-2">
            <div className="gap-2 flex justify-center">
              <FormField
                control={form.control}
                name={fieldNames.PROJECT_IMAGE}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  const errorMessage = error?.message || null;
                  return (
                    <UploadAvatarFormFieldFormItem
                      isError={errorMessage != null}
                      onChange={onChange}
                      className="flex flex-col items-center"
                      value={value as any}
                    />
                  );
                }}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name={fieldNames.PROJECT_NAME}
                render={(props) => (
                  <FormFloatingLabelInput
                    label="Название проекта *"
                    {...props}
                  />
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name={fieldNames.PROJECT_WEBSITE}
                render={(props) => (
                  <FormFloatingLabelInput
                    label="Сайт, если есть *"
                    {...props}
                  />
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name={fieldNames.PROJECT_ACTIVITY_FIELD}
                render={(props) => (
                  <FormFloatingLabelInput
                    label="Сфера деятельности *"
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
