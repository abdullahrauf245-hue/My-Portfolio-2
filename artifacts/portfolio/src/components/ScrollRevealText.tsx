import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export default function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  // Track the scroll position of the paragraph relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.65"], // Animates as the container rises into view
  });

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, idx) => {
        // Calculate the relative scroll range for each word
        const start = idx / words.length;
        const end = (idx + 1) / words.length;
        
        // Map paragraph scroll progress to individual word opacity
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

        return (
          <span key={idx} className="relative inline-block mr-[0.25em] select-none">
            {/* Very faint background layout text to prevent layout shifting and add visual structure */}
            <span className="absolute opacity-10 text-[var(--color-text-primary)] pointer-events-none">
              {word}
            </span>
            {/* Animated white foreground word */}
            <motion.span style={{ opacity }} className="text-[var(--color-text-primary)] relative z-10">
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
