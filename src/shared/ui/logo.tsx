import React, { PropsWithChildren } from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({
  className,
  children,
}: PropsWithChildren<LogoProps>) {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={"../logo.svg"}
        width={50}
        height={30}
        className={className}
        alt={"logo"}
      />
      <h1 className="text-lg font-semibold">{children}</h1>
    </div>
  );
}
