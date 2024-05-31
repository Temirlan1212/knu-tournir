import { options } from "@/app/api/auth/[...nextauth]/options";
import { DashboardHeader } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function Layout({
  children,
}: Readonly<PropsWithChildren>) {
  const session = await getServerSession(options);
  if (session == null) return notFound();

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
