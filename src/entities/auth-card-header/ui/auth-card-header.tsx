"use client";

import { CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import Logo from "@/shared/ui/logo";
import { Link } from "lucide-react";

export interface AuthCardHeaderProps {
  title: React.ReactNode;
  description: React.ReactNode;
}
export default function AuthCardHeader({
  title,
  description,
}: AuthCardHeaderProps) {
  <CardHeader className="px-0 pt-0">
    <Link href={"/"} className="w-full flex justify-center">
      <Logo />
    </Link>
    <CardTitle className="text-2xl text-center">{title}</CardTitle>
    <CardDescription className="text-center">{description}</CardDescription>
  </CardHeader>;
}
