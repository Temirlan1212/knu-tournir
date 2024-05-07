import { DashboardHeader } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <DashboardHeader />
      <div className="flex">
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        <div className="py-6 sm:py-10 px-6 sm:px-10">{children}</div>
      </div>
    </>
  );
}
