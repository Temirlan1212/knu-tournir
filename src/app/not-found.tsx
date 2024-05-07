"use client";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";
import "./[locale]/globals.css";

export default function NotFound() {
  const router = useRouter();
  const returnBack = () => router.back();
  return (
    <html>
      <body className="px-5 py-5 h-[100dvh] flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-[30px]">Страница не найдена</h1>
          <Button size="lg" onClick={returnBack}>
            Вернуться назад
          </Button>
        </div>
      </body>
    </html>
  );
}
