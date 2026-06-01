import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Award } from "lucide-react";

interface Skill {
  name: string;
  accent: string;
}

export default function ToolkitOrbital() {
  const [time, setTime] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Orbit Speed definitions (radians per second)
  const speeds = {
    ring1: 0.6,
    ring2: 0.4,
    ring3: 0.25,
    ring4: 0.15,
  };

  // Concentric Orbit Radii (px)
  const radius1 = 50;
  const radius2 = 90;
  const radius3 = 130;
  const radius4 = 170;

  // Skills mapped exactly to the request
  const ring1Skills: Skill[] = [
    { name: "Python", accent: "#FF6B35" },
    { name: "Java", accent: "#FF6B35" },
  ];

  const ring2Skills: Skill[] = [
    { name: "C++", accent: "#FF6B35" },
    { name: "SQL", accent: "#FF6B35" },
    { name: "JavaScript", accent: "#FF6B35" },
  ];

  const ring3Skills: Skill[] = [
    { name: "React", accent: "#FF6B35" },
    { name: "Next.js", accent: "#FF6B35" },
    { name: "Node.js", accent: "#FF6B35" },
    { name: "Tailwind CSS", accent: "#FF6B35" },
  ];

  const ring4Skills: Skill[] = [
    { name: "MongoDB", accent: "#FF6B35" },
    { name: "Supabase", accent: "#FF6B35" },
    { name: "Git", accent: "#FF6B35" },
    { name: "GitHub", accent: "#FF6B35" },
    { name: "Vercel", accent: "#FF6B35" },
  ];

  // requestAnimationFrame Loop for jank-free 60 FPS animation
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

  const renderSkills = (skills: Skill[], radius: number, speed: number) => {
    return skills.map((skill, index) => {
      // Calculate angular spacing for perfect even distribution
      const baseAngle = (index * 2 * Math.PI) / skills.length;
      // Formula: x = cos(angle + elapsed * speed) * radius, y = sin(angle + elapsed * speed) * radius
      const currentAngle = baseAngle + time * speed;
      const x = Math.cos(currentAngle) * radius;
      const y = Math.sin(currentAngle) * radius;

      const isHovered = hoveredSkill === skill.name;

      return (
        <button
          key={skill.name}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${isHovered ? 1.1 : 1})`,
            boxShadow: isHovered ? "0 0 12px rgba(255, 107, 53, 0.35)" : "none",
          }}
          className={`absolute z-20 px-3 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-all duration-200 ease-out select-none whitespace-nowrap outline-none ${
            isHovered
              ? "border-[var(--color-accent-orange)] text-[var(--color-accent-orange)]"
              : "bg-white dark:bg-[#111111] border-stone-200 dark:border-stone-800 text-stone-700 dark:text-[#ffffff]"
          }`}
        >
          {skill.name}
        </button>
      );
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 select-none relative z-10">
      
      {/* Dynamic Scale Wrapper for perfect Mobile viewports scaling */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[380px] h-[380px] md:w-[400px] md:h-[400px] relative flex items-center justify-center scale-75 sm:scale-90 md:scale-100 flex-shrink-0"
      >
        {/* Center core: solid orange circle with Code Lucide Icon */}
        <div 
          style={{
            boxShadow: "0 0 30px rgba(255, 107, 53, 0.45)",
          }}
          className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center z-35 transition-transform duration-300 hover:scale-105"
        >
          <Code2 className="w-5 h-5 text-white" />
        </div>

        {/* Orbit Ring 1 */}
        <div
          style={{ width: radius1 * 2, height: radius1 * 2 }}
          className="absolute rounded-full border border-black/[0.06] dark:border-white/10 pointer-events-none z-10"
        />
        {renderSkills(ring1Skills, radius1, speeds.ring1)}

        {/* Orbit Ring 2 */}
        <div
          style={{ width: radius2 * 2, height: radius2 * 2 }}
          className="absolute rounded-full border border-black/[0.06] dark:border-white/10 pointer-events-none z-10"
        />
        {renderSkills(ring2Skills, radius2, speeds.ring2)}

        {/* Orbit Ring 3 */}
        <div
          style={{ width: radius3 * 2, height: radius3 * 2 }}
          className="absolute rounded-full border border-black/[0.06] dark:border-white/10 pointer-events-none z-10"
        />
        {renderSkills(ring3Skills, radius3, speeds.ring3)}

        {/* Orbit Ring 4 */}
        <div
          style={{ width: radius4 * 2, height: radius4 * 2 }}
          className="absolute rounded-full border border-black/[0.06] dark:border-white/10 pointer-events-none z-10"
        />
        {renderSkills(ring4Skills, radius4, speeds.ring4)}
      </motion.div>



    </div>
  );
}
