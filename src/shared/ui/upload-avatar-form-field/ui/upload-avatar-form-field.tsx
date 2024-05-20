"use client";
import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { ChangeEvent, useRef, useState } from "react";
import { AvatarPreview } from "./avatar-preview";
import { HiddenFileInput } from "./hidden-file-input";
import { ResetAvatarPreviewAction } from "./reset-avatar-preview-action";
import { AvatarFullPreviewAction } from "./avatar-full-preview-action";
import { cn } from "@/shared/lib/classnames";

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  const dataTransfer = new DataTransfer();

  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image)
  );

  const files = dataTransfer.files;
  if (files?.length < 1) return null;
  const displayUrl = URL?.createObjectURL(event.target.files![0]);

  return { files, displayUrl };
}

interface UploadAvatarFormFieldProps {
  form: UseFormReturn<any>;
  fieldName: string;
  label?: string;
}

export function UploadAvatarFormField({
  form,
  fieldName,
  label,
}: UploadAvatarFormFieldProps) {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={fieldName}
        render={({
          field: { onChange, value, ...rest },
          fieldState: { error },
        }) => {
          const errorMessage = error?.message ? String(error?.message) : null;
          const isError = errorMessage != null;

          return (
            <UploadAvatarFormFieldFormItem
              label={label}
              isError={isError}
              onChange={onChange}
            />
          );
        }}
      />
    </Form>
  );
}

export interface UploadAvatarFormFieldFormItemProps {
  label?: string;
  isError: boolean;
  onChange: (event: FileList | string) => void;
  className?: string;
}

export function UploadAvatarFormFieldFormItem({
  label,
  isError,
  onChange,
  className,
}: UploadAvatarFormFieldFormItemProps) {
  const [preview, setPreview] = useState("");
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const resetPreview = () => {
    setPreview("");
    onChange("");
  };

  return (
    <FormItem className={cn("relative w-[fit-content]", className)}>
      {!!label && <FormLabel>{label}</FormLabel>}
      {!!preview && (
        <ResetAvatarPreviewAction
          resetPreview={resetPreview}
          className="top-[15px] right-[0px]"
        />
      )}
      {!!preview && (
        <AvatarFullPreviewAction
          preview={preview}
          className="top-[15px] left-[0px]"
        />
      )}

      <AvatarPreview
        preview={preview}
        isError={isError}
        onClick={() => inputFileRef.current?.click()}
      />

      <FormControl>
        <HiddenFileInput
          ref={inputFileRef}
          onChange={(event) => {
            const imageData = getImageData(event);
            if (imageData == null) return;
            const { files, displayUrl } = imageData;
            setPreview(displayUrl);
            onChange(files);
          }}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
