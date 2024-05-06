import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Logo from "@/shared/ui/logo";
import { UserNav } from "@/entities/user";
import { MobileSidebar } from "@/widgets/sidebar";

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
