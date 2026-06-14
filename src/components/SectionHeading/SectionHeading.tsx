import type { ReactNode } from "react";

type SectionHeadingSize = "base" | "large" | "responsive" | "steps" | "tight";

interface SectionHeadingProps {
  children: ReactNode;
  align?: "left" | "center";
  color?: "dark" | "gray";
  size?: SectionHeadingSize;
  className?: string;
}

const alignClasses = {
  left: "",
  center: "text-center",
};

const colorClasses = {
  dark: "text-[#111111]",
  gray: "text-gray-900",
};

const sizeClasses: Record<SectionHeadingSize, string> = {
  base: "text-[40px] leading-[130%]",
  large: "text-[40px] leading-[130%] md:text-[48px]",
  responsive: "text-[28px] leading-[130%] md:text-[40px]",
  steps: "text-[32px] leading-[130%] md:text-[48px]",
  tight: "text-[40px] leading-[120%]",
};

export default function SectionHeading({
  children,
  align = "left",
  color = "dark",
  size = "base",
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`${alignClasses[align]} ${sizeClasses[size]} font-bold ${colorClasses[color]} ${className}`.trim()}
    >
      {children}
    </h2>
  );
}
