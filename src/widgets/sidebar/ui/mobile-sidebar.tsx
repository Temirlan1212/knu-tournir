"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import { useSidebar } from "../model/store/sidebar.store";
import { useIsMounted } from "@/shared/lib/hooks/useIsMounted";
import SideNav from "./side-nav";
import Logo from "@/shared/ui/logo";
import Link from "next/link";

export default function MobileSidebar() {
  const isOpen = useSidebar((state) => state.sheet);
  const setSheet = useSidebar((state) => state.setSheet);
  const { isMounted } = useIsMounted();
  if (!isMounted) return null;

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setSheet}>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center gap-2">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent side="bottom" className="w-full">
          <Link href="/">
            <Logo>
              <div className="font-bold">EXEDRIVE</div>
            </Logo>
          </Link>

          <div className="px-1 py-6 pt-10 h-full px-2 max-h-[600px] overflow-y-auto">
            <SideNav media="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
