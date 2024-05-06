import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Logo from "@/shared/ui/logo";
import { UserNav } from "@/entities/user";

export default function DashboardHeader() {
  return (
    <div className="block supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-12 items-center justify-between px-6">
        <Link
          href={"/"}
          className="hidden items-center justify-between gap-2 md:flex"
        >
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <UserNav />
        </div>
      </nav>
    </div>
  );
}
