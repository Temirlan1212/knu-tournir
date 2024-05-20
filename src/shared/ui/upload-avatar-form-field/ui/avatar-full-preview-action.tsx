"use client";
import { Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/dialog";
import Image from "next/image";
import { cn } from "@/shared/lib/classnames";

export interface AvatarFullPreviewActionProps {
  preview: string;
  className?: string;
}

export function AvatarFullPreviewAction({
  preview,
  className,
}: AvatarFullPreviewActionProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Expand
            className={cn(
              "cursor-pointer absolute border z-10 bg-muted rounded-full p-[2px]",
              className
            )}
            size={20}
          />
        </DialogTrigger>
        <DialogContent className="w-full max-w-[90dvw] p-0">
          <Image
            src={preview}
            blurDataURL={preview}
            alt={"cover blog image"}
            width={100}
            height={100}
            objectFit="cover"
            className="h-[90dvh] overflow-auto w-full object-contain rounded-[23px] rounded-b-[10px]"
            placeholder="blur"
            unoptimized
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
