import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-28 w-full rounded-md border border-cyan-200/15 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/70",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
