"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CaseSealProps {
  className?: string;
  size?: number;
  animate?: boolean;
  variant?: "default" | "success";
}

export function CaseSeal({ 
  className, 
  size = 24, 
  animate = false,
  variant = "default" 
}: CaseSealProps) {
  const sealContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-brass", className)}
    >
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner decorative circles */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      
      {/* Scale/Balance symbol */}
      <path
        d="M 30 45 L 50 35 L 70 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="50"
        y1="35"
        x2="50"
        y2="65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Base of scale */}
      <path
        d="M 40 65 L 60 65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Decorative notches around circle */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + 42 * Math.cos(rad);
        const y1 = 50 + 42 * Math.sin(rad);
        const x2 = 50 + 46 * Math.cos(rad);
        const y2 = 50 + 46 * Math.sin(rad);
        
        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          rotate: 0,
          ...(variant === "success" && {
            scale: [1, 1.1, 1],
          })
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          scale: variant === "success" ? {
            duration: 0.3,
            repeat: 1,
          } : undefined,
        }}
      >
        {sealContent}
      </motion.div>
    );
  }

  return sealContent;
}
