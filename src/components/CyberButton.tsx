
import { Button } from "@/components/ui/button";
import React from "react";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "blue" | "pink" | "purple" | "green" | "yellow";
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  glitch?: boolean;
  children: React.ReactNode;
}

const CyberButton: React.FC<CyberButtonProps> = ({
  color = "blue",
  variant = "filled",
  size = "md",
  glitch = false,
  className = "",
  children,
  ...props
}) => {
  const colorStyles = {
    blue: "text-neon-blue border-neon-blue hover:bg-neon-blue/20",
    pink: "text-neon-pink border-neon-pink hover:bg-neon-pink/20",
    purple: "text-neon-purple border-neon-purple hover:bg-neon-purple/20",
    green: "text-neon-green border-neon-green hover:bg-neon-green/20",
    yellow: "text-neon-yellow border-neon-yellow hover:bg-neon-yellow/20",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  const variantStyles = {
    filled: `bg-background border-2 ${colorStyles[color]} shadow-[0_0_10px_rgba(var(--color-rgb),0.5)]`,
    outline: `bg-transparent border-2 ${colorStyles[color]} shadow-[0_0_10px_rgba(var(--color-rgb),0.5)]`,
  };

  const colorRgb = {
    blue: "76, 201, 255",
    pink: "255, 44, 196",
    purple: "189, 0, 255",
    green: "0, 255, 159",
    yellow: "255, 234, 0",
  };

  return (
    <Button
      className={`relative font-mono tracking-wider uppercase
        ${sizeStyles[size]} 
        ${variantStyles[variant]} 
        ${glitch ? "animate-flicker" : ""} 
        ${className}`}
      style={{ "--color-rgb": colorRgb[color] } as React.CSSProperties}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CyberButton;
