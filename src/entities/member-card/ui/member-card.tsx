"use client";
import { cn } from "@/shared/lib/classnames";
import { CardDescription, CardTitle } from "@/shared/ui/card";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  alt: ImageProps["alt"];
  src: string;
  title: string;
  description: string;
}

export default function Card({
  src,
  alt,
  title,
  description,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col items-center gap-7 rounded-[16px] bg-[#F2F2F7] p-4",
        className
      )}
      {...rest}
    >
      {!!src && (
        <Image
          src={src}
          blurDataURL={src}
          alt={alt}
          width={192}
          height={120}
          objectFit="cover"
          className="overflow-auto w-full object-contain w-[192px] h-[120px]"
          placeholder="blur"
          loading="lazy"
        />
      )}

      <div className="flex flex-col gap-3 items-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </div>
  );
}
