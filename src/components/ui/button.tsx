import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-2.5 text-base"
};

export function Button({ className="", variant="default", size="md", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition border";
  const style = variant === "outline"
    ? "bg-transparent border-neutral-200 hover:bg-amber-50"
    : "bg-amber-500 text-white border-amber-500 hover:bg-amber-600";
  return <button className={`${base} ${style} ${sizes[size]} ${className}`} {...props} />;
}
