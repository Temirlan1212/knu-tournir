"use client";

import { cn } from "@/shared/lib/classnames";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { PropsWithChildren } from "react";

export interface MainComponentProps {
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}

export default function MainComponent({
  title,
  description,
  children,
  className,
}: PropsWithChildren<MainComponentProps>) {
  return (
    <Card
      className={cn(
        "relative p-[10px] max-h-[90dvh] max-w-[500px] border-none shadow-none overflow-y-auto flex flex-col items-center m-auto",
        className
      )}
    >
      <CardHeader className="px-0 pt-0 flex items-center">
        <CardTitle className="text-2xl text-center">{title}</CardTitle>
        <CardDescription className="text-center max-w-[370px]">
          {description}
        </CardDescription>
      </CardHeader>
      {children}
    </Card>
  );
}
