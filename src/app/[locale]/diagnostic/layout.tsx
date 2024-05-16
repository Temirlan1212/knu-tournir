import { PropsWithChildren } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <div className="py-6 sm:py-10 px-6 sm:px-10">{children}</div>
    </>
  );
}
