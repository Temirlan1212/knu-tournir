import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Logo from "@/shared/ui/logo";
import { Button } from "@/shared/ui/button";

export default function Header() {
  return (
    <div className="block supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-12 items-center justify-between px-6">
        <Link href={"/"}>
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link href="sign-in">
            <Button variant="defaultGhost">Войти</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
