"use client";

import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/ui/button";
import { Input, InputProps } from "@/ui/input";
import { cn } from "@/shared/lib/classnames";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <>
        <Input
          {...props}
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword && !props.disabled ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Скрыть пароль" : "Показать пароль"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
