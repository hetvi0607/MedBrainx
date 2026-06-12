import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-md border border-cyan-200/15 bg-white/8 px-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/70",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
