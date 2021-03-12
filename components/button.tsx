import React, { ReactNode, Props, ComponentPropsWithoutRef } from "react"

export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  color?: "white" | "red";
}

export function Button({ onClick, children, color, className }: ButtonProps) {
  const colorClasses = color != undefined && color == "white" ? "bg-white hover:shadow-lg" : "bg-red-500 hover:bg-red-700 text-white";
  return <button className={`p-2 rounded-md transition duration-150 ease-in-out ${colorClasses} ${className ?? ""}`} onClick={onClick}>{children}</button>
}