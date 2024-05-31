"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/ui/sheet";
import { useIsMounted } from "@/shared/lib/hooks/useIsMounted";
import Logo from "@/ui/logo";
import Link from "next/link";
import { paths } from "@/shared/routing";

export default function MobileNav() {
  const { isMounted } = useIsMounted();
  if (!isMounted) return null;

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center gap-2">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
          <Link href={paths.home}>
            <SheetClose>
              <Logo>
                <div className="font-bold">EXEDRIVE</div>
              </Logo>
            </SheetClose>
          </Link>

          <div className="px-1 py-6 pt-10 h-full px-2 max-h-[600px] overflow-y-auto">
            <div className="flex flex-col gap-2 sm:gap-[40px] font-bold">
              <Link href={paths.home}>
                <SheetClose>Главная</SheetClose>
              </Link>
              <Link href={paths.about}>
                <SheetClose>О нас</SheetClose>
              </Link>
              <Link href={paths.contacts}>
                <SheetClose>Контакты</SheetClose>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
