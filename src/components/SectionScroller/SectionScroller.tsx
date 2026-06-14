import type { ReactNode } from "react";

interface SectionScrollerProps {
  children: ReactNode;
  gap?: "gap-4" | "gap-5";
  className?: string;
}

export default function SectionScroller({
  children,
  gap = "gap-4",
  className = "",
}: SectionScrollerProps) {
  return (
    <div
      className={`no-scrollbar mx-auto mt-8 flex ${gap} overflow-x-auto scroll-smooth pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
