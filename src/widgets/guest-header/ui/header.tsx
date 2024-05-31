import Link from "next/link";
import Logo from "@/ui/logo";
import { Button } from "@/ui/button";
import { paths } from "@/shared/routing";
import { cn } from "@/shared/lib/classnames";
import MobileNav from "./mobile-nav";

export default function Header({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "block supports-backdrop-blur:bg-background/60  bg-background/95 backdrop-blur",
        className
      )}
    >
      <nav className="flex h-12 items-center justify-between">
        <Link href={paths.home}>
          <Logo>InoPay</Logo>
        </Link>

        <div className="flex gap-[20px] sm:gap-[40px] items-center">
          <div className="hidden sm:flex gap-2 sm:gap-[40px] font-[600]">
            <Link href={paths.home}>Главная</Link>
            <Link href={paths.about}>О нас</Link>
            <Link href={paths.contacts}>Контакты</Link>
          </div>

          <div className="block sm:hidden">
            <MobileNav />
          </div>

          <div className="flex items-center gap-2">
            <Link href={paths.login}>
              <Button variant="destructive">Войти</Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
