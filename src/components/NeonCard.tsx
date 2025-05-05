
import React from "react";
import { cn } from "@/lib/utils";

interface NeonCardProps {
  children: React.ReactNode;
  color?: "blue" | "pink" | "purple" | "green" | "yellow";
  className?: string;
}

const NeonCard: React.FC<NeonCardProps> = ({
  children,
  color = "blue",
  className,
}) => {
  const colorStyles = {
    blue: "border-neon-blue shadow-[0_0_10px_rgba(76,201,255,0.5),inset_0_0_10px_rgba(76,201,255,0.2)]",
    pink: "border-neon-pink shadow-[0_0_10px_rgba(255,44,196,0.5),inset_0_0_10px_rgba(255,44,196,0.2)]",
    purple: "border-neon-purple shadow-[0_0_10px_rgba(189,0,255,0.5),inset_0_0_10px_rgba(189,0,255,0.2)]",
    green: "border-neon-green shadow-[0_0_10px_rgba(0,255,159,0.5),inset_0_0_10px_rgba(0,255,159,0.2)]",
    yellow: "border-neon-yellow shadow-[0_0_10px_rgba(255,234,0,0.5),inset_0_0_10px_rgba(255,234,0,0.2)]",
  };

  return (
    <div
      className={cn(
        "relative bg-card/80 backdrop-blur-sm border rounded-md p-6",
        colorStyles[color],
        className
      )}
    >
      {children}
    </div>
  );
};

export default NeonCard;
