import { DashboardHeader } from "@/widgets/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <DashboardHeader />
      <div className="px-5 py-5">{children}</div>
    </>
  );
}
