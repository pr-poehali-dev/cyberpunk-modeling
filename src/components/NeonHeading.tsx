
import React from "react";
import { cn } from "@/lib/utils";

interface NeonHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: "blue" | "pink" | "purple" | "green" | "yellow";
  animated?: boolean;
  className?: string;
}

const NeonHeading: React.FC<NeonHeadingProps> = ({
  children,
  level = 2,
  color = "blue",
  animated = false,
  className,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const colorStyles = {
    blue: "text-white [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#4cc9ff,0_0_20px_#4cc9ff,0_0_25px_#4cc9ff,0_0_30px_#4cc9ff,0_0_35px_#4cc9ff]",
    pink: "text-white [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#ff2cc4,0_0_20px_#ff2cc4,0_0_25px_#ff2cc4,0_0_30px_#ff2cc4,0_0_35px_#ff2cc4]",
    purple: "text-white [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#bd00ff,0_0_20px_#bd00ff,0_0_25px_#bd00ff,0_0_30px_#bd00ff,0_0_35px_#bd00ff]",
    green: "text-white [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#00ff9f,0_0_20px_#00ff9f,0_0_25px_#00ff9f,0_0_30px_#00ff9f,0_0_35px_#00ff9f]",
    yellow: "text-white [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#ffea00,0_0_20px_#ffea00,0_0_25px_#ffea00,0_0_30px_#ffea00,0_0_35px_#ffea00]",
  };

  const sizeStyles = {
    1: "text-5xl md:text-6xl font-bold",
    2: "text-4xl md:text-5xl font-bold",
    3: "text-3xl md:text-4xl font-bold",
    4: "text-2xl md:text-3xl font-semibold",
    5: "text-xl md:text-2xl font-semibold",
    6: "text-lg md:text-xl font-semibold",
  };

  return (
    <HeadingTag
      className={cn(
        "font-['Orbitron',sans-serif] tracking-wider uppercase",
        sizeStyles[level],
        colorStyles[color],
        animated && "animate-neon-glow",
        className
      )}
    >
      {children}
    </HeadingTag>
  );
};

export default NeonHeading;
