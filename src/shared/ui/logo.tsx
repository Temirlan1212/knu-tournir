import React, { PropsWithChildren } from "react";
import Image from "next/image";
import LogoPath from "@/public/logo.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({
  className,
  children,
}: PropsWithChildren<LogoProps>) {
  return (
    <div className="flex gap-2 items-center min-w-[50px] min-h-[30px]">
      <Image
        src={LogoPath}
        width={50}
        height={30}
        className={className}
        alt={"logo"}
      />
      <h1 className="text-lg font-semibold">{children}</h1>
    </div>
  );
}
