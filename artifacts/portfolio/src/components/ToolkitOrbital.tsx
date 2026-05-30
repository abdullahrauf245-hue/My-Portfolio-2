import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Award } from "lucide-react";

interface Skill {
  name: string;
  accent: string; // HSL or Hex matching the branding
}

export default function ToolkitOrbital() {
  const [time, setTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Orbit Speed definitions (radians per second)
  const speeds = {
    ring1: 0.6,
    ring2: 0.4,
    ring3: 0.25,
    ring4: 0.15,
  };

  // Skill mappings matching the exact request
  const ring1Skills: Skill[] = [
    { name: "Python", accent: "var(--color-accent-orange)" },
    { name: "Java", accent: "var(--color-accent-orange)" },
  ];

  const ring2Skills: Skill[] = [
    { name: "C++", accent: "var(--color-accent-orange)" },
    { name: "SQL", accent: "var(--color-accent-orange)" },
    { name: "JavaScript", accent: "var(--color-accent-orange)" },
  ];

  const ring3Skills: Skill[] = [
    { name: "React", accent: "var(--color-accent-lime)" },
    { name: "Next.js", accent: "var(--color-accent-lime)" },
    { name: "Node.js", accent: "var(--color-accent-lime)" },
    { name: "Tailwind CSS", accent: "var(--color-accent-lime)" },
  ];

  const ring4Skills: Skill[] = [
    { name: "MongoDB", accent: "var(--color-accent-lime)" },
    { name: "Supabase", accent: "var(--color-accent-lime)" },
    { name: "Git", accent: "var(--color-accent-orange)" },
    { name: "GitHub", accent: "var(--color-accent-orange)" },
    { name: "Vercel", accent: "var(--color-accent-lime)" },
  ];

  // Screen size listener for responsive scaling
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation frame loop
  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      setTime((prev) => prev + delta);
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Dynamic radius calculations based on viewport scaling
  const scale = isMobile ? 0.62 : 1.0;
  const radius1 = 65 * scale;
  const radius2 = 120 * scale;
  const radius3 = 175 * scale;
  const radius4 = 230 * scale;

  // Helper to render pills at computed coordinates
  const renderSkills = (skills: Skill[], radius: number, speed: number) => {
    return skills.map((skill, index) => {
      const baseAngle = (index * 2 * Math.PI) / skills.length;
      const currentAngle = baseAngle + time * speed;
      const x = radius * Math.cos(currentAngle);
      const y = radius * Math.sin(currentAngle);

      const isHovered = hoveredSkill === skill.name;

      return (
        <button
          key={skill.name}
          onMouseEnter={() => setCursorHoverState(skill.name, true)}
          onMouseLeave={() => setCursorHoverState(skill.name, false)}
          style={{
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${isHovered ? 1.08 : 1})`,
            borderColor: isHovered ? skill.accent : "rgba(255, 255, 255, 0.08)",
            boxShadow: isHovered ? `0 0 14px ${skill.accent}30` : "none",
            color: isHovered ? skill.accent : "#ffffff",
          }}
          className="absolute z-20 px-3.5 py-1.5 rounded-full bg-[#0c0c0c] border text-[11px] md:text-xs font-semibold tracking-wide cursor-pointer transition-all duration-200 ease-out select-none whitespace-nowrap outline-none"
        >
          {skill.name}
        </button>
      );
    });
  };

  const setCursorHoverState = (name: string, active: boolean) => {
    setHoveredSkill(active ? name : null);
    // Dispatches a state change event for our custom follow cursor
    const element = document.body;
    if (active) {
      element.classList.add("cursor-hover-element");
    } else {
      element.classList.remove("cursor-hover-element");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 relative overflow-hidden select-none">
      
      {/* Label Title */}
      <span className="text-[11px] font-poppins font-bold text-stone-500 uppercase tracking-[0.35em] mb-4 block text-center">
        Technical Arsenal
      </span>

      {/* Primary Orbital Canvas Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        style={{
          width: radius4 * 2 + 100,
          height: radius4 * 2 + 100,
        }}
        className="relative flex items-center justify-center flex-shrink-0"
      >
        {/* Core Center Sun Element */}
        <div 
          style={{
            boxShadow: "0 0 35px var(--color-accent-orange)40",
          }}
          className="w-12 h-12 rounded-full bg-[var(--color-accent-orange)] flex items-center justify-center z-30 transition-transform duration-300 hover:scale-105"
        >
          <Code2 className="w-5 h-5 text-white" />
        </div>

        {/* Orbit Ring 1 */}
        <div
          style={{ width: radius1 * 2, height: radius1 * 2 }}
          className="absolute rounded-full border border-white/5 pointer-events-none z-10"
        />
        {renderSkills(ring1Skills, radius1, speeds.ring1)}

        {/* Orbit Ring 2 */}
        <div
          style={{ width: radius2 * 2, height: radius2 * 2 }}
          className="absolute rounded-full border border-white/5 pointer-events-none z-10"
        />
        {renderSkills(ring2Skills, radius2, speeds.ring2)}

        {/* Orbit Ring 3 */}
        <div
          style={{ width: radius3 * 2, height: radius3 * 2 }}
          className="absolute rounded-full border border-white/5 pointer-events-none z-10"
        />
        {renderSkills(ring3Skills, radius3, speeds.ring3)}

        {/* Orbit Ring 4 */}
        <div
          style={{ width: radius4 * 2, height: radius4 * 2 }}
          className="absolute rounded-full border border-white/5 pointer-events-none z-10"
        />
        {renderSkills(ring4Skills, radius4, speeds.ring4)}
      </motion.div>

      {/* Certification Details Card */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="mt-16 w-full max-w-md p-5 bg-[#080808] border-l-4 border-[var(--color-accent-orange)] border-y border-r border-white/5 rounded-r-2xl shadow-xl flex items-center gap-4 transition-all duration-300 hover:border-white/10"
      >
        <div className="w-12 h-12 rounded-full bg-[var(--color-accent-orange)]/10 flex items-center justify-center flex-shrink-0">
          <Award className="w-6 h-6 text-[var(--color-accent-orange)]" />
        </div>
        <div className="min-w-0">
          <h4 className="font-poppins font-bold text-sm text-white tracking-wide leading-tight">
            Anthropic Certified
          </h4>
          <p className="text-xs text-stone-500 font-poppins font-medium mt-1 leading-normal">
            AI Fluency Framework & Foundations
          </p>
        </div>
      </motion.div>

    </div>
  );
}
