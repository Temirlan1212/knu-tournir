"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { PropsWithChildren } from "react";

export interface MainComponentProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function MainComponent({
  title,
  description,
  children,
}: PropsWithChildren<MainComponentProps>) {
  return (
    <Card className="relative p-[10px] max-h-[90dvh] max-w-[500px] border-none shadow-none overflow-y-auto flex flex-col items-center m-auto">
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
