import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HoverCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(255, 107, 53, 0.15)" (orange) or "rgba(197, 255, 65, 0.15)" (lime)
}

export default function HoverCard3D({
  children,
  className = "",
  glowColor = "rgba(255, 107, 53, 0.15)",
}: HoverCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking relative mouse position
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);

  // Smooth springs for perspective tilt
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(rotateXVal, springConfig);
  const rotateY = useSpring(rotateYVal, springConfig);

  // Spotlight glow coordinates
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Position of mouse cursor inside the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert mouse position to percentages for spotlight glow
    glowX.set(x);
    glowY.set(y);

    // Calculate rotation: mouse x moves Y axis rotation, mouse y moves X axis rotation
    const rotateYPercent = (x / rect.width) - 0.5; // -0.5 to 0.5
    const rotateXPercent = (y / rect.height) - 0.5; // -0.5 to 0.5

    // Max 10 degrees of tilt
    rotateYVal.set(rotateYPercent * 8);
    rotateXVal.set(-rotateXPercent * 8);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateXVal.set(0);
    rotateYVal.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic Cursor Spotlight Glow Overlay using CSS variables mapped to MotionValues */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(350px circle at var(--mx) var(--my), ${glowColor}, transparent 80%)`,
          // @ts-ignore
          "--mx": useTransform(glowX, (val) => `${val}px`),
          // @ts-ignore
          "--my": useTransform(glowY, (val) => `${val}px`),
          opacity: isHovered ? 1 : 0,
          pointerEvents: "none",
          zIndex: 1,
          transition: "opacity 0.4s ease",
        }}
      />
      
      {/* Content wrapper to preserve absolute/relative stack layout */}
      <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
