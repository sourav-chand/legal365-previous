"use client";

import { cn } from "@/lib/utils";

interface LedgerLineProps {
  className?: string;
  withDot?: boolean;
}

export function LedgerLine({ className, withDot = false }: LedgerLineProps) {
  return (
    <div className={cn("relative h-px w-full", className)}>
      <div className="absolute inset-0 bg-brass opacity-30" />
      {withDot && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-1.5 w-1.5 rounded-full bg-brass" />
        </div>
      )}
    </div>
  );
}
