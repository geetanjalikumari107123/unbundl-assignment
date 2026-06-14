import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  buttonHeight: string
}

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  buttonHeight,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonHeight} rounded-lg bg-[#8D62D9] text-[16px] font-semibold leading-6 text-white transition hover:bg-[#7A4FD0] ${className}`}
    >
      {children}
    </button>
  );
}