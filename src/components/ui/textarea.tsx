import * as React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className="", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400 ${className}`}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
