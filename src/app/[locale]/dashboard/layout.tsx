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
        <div className="py-5 px-5">{children}</div>
      </div>
    </>
  );
}
