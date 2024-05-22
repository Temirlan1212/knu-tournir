"use client";
import Link from "next/link";
import Logo from "@/shared/ui/logo";
import { UserNav } from "@/entities/user";
import { MobileSidebar } from "@/widgets/sidebar";
import { PropsWithChildren } from "react";
import { paths } from "@/shared/routing";

export default function CreateProjectProcessesHeader({
  children,
}: PropsWithChildren) {
  return (
    <div className="block supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur py-2">
      <nav className="flex h-[fit-content] items-center justify-between px-6 gap-5">
        <Link
          href={paths.home}
          className="hidden items-center justify-between gap-2 md:flex"
        >
          <Logo />
        </Link>
        <div className="w-full md:flex hidden">{children}</div>
        <div className="md:hidden flex">
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
