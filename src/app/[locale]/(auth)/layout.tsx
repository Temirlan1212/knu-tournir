import { PropsWithChildren } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="px-5 py-5 flex justify-center items-center h-[100dvh] bg-[#F7F8FA]">
      <div className="w-[472px]">{children}</div>
    </div>
  );
}
