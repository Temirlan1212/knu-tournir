import { PropsWithChildren } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <div className="py-5 px-5">{children}</div>
    </>
  );
}
