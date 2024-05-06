import { Header } from "@/widgets/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Header />
      <div className="py-5 px-5">{children}</div>
    </>
  );
}
