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
import { useEffect, useRef, useState } from "react";
import { AvatarPreview } from "./avatar-preview";
import { HiddenFileInput } from "./hidden-file-input";
import { ResetAvatarPreviewAction } from "./reset-avatar-preview-action";
import { AvatarFullPreviewAction } from "./avatar-full-preview-action";
import { cn } from "@/shared/lib/classnames";
import { getImageData } from "@/shared/lib/helpers/file";

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
  value?: FileList;
}

export function UploadAvatarFormFieldFormItem({
  label,
  isError,
  onChange,
  className,
  value,
}: UploadAvatarFormFieldFormItemProps) {
  const [preview, setPreview] = useState("");
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const resetPreview = () => {
    setPreview("");
    onChange("");
  };

  useEffect(() => {
    const previewUrl = getImageData(value)?.displayUrl;
    if (previewUrl) setPreview(previewUrl);
  }, []);

  return (
    <FormItem className={cn("relative w-[fit-content]", className)}>
      {!!label && <FormLabel>{label}</FormLabel>}
      {!!preview && (
        <AvatarFullPreviewAction
          preview={preview}
          className="top-[15px] right-[-5px]"
        />
      )}
      {!!preview && (
        <ResetAvatarPreviewAction
          resetPreview={resetPreview}
          className="top-[-15px] right-[15px]"
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
            const imageData = getImageData(event.target.files!);
            if (imageData == null) return;
            setPreview(imageData.displayUrl);
            onChange(imageData.files);
          }}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
