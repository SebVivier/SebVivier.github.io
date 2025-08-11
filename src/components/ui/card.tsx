import * as React from "react";

export function Card({ className="", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-2xl border bg-white ${className}`}>{children}</div>;
}

export function CardContent({ className="", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
