import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

interface Skill {
  name: string;
  accent: string;
}

export default function ToolkitOrbital() {
  const [time, setTime] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [screenSize, setScreenSize] = useState<"xs" | "sm" | "md" | "lg">("lg");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setScreenSize("xs");
      } else if (width < 640) {
        setScreenSize("sm");
      } else if (width < 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scale multiplier based on responsive screen size
  const scale = 
    screenSize === "xs" ? 0.52 :
    screenSize === "sm" ? 0.68 :
    screenSize === "md" ? 0.85 : 1.0;

  // Orbit Speed definitions (radians per second)
  const speeds = {
    ring1: 0.6,
    ring2: 0.4,
    ring3: 0.25,
    ring4: 0.15,
  };

  // Concentric Orbit Radii (px) scaled dynamically
  const radius1 = 50 * scale;
  const radius2 = 90 * scale;
  const radius3 = 130 * scale;
  const radius4 = 170 * scale;

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

      // Adjust padding and font size dynamically based on scale
      const btnSizeClass = 
        screenSize === "xs" ? "px-1.5 py-0.5 text-[9px]" :
        screenSize === "sm" ? "px-2 py-1 text-[10px]" :
        screenSize === "md" ? "px-2.5 py-1 text-xs" :
        "px-3 py-1.5 text-xs";

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
          className={`absolute z-20 rounded-full border font-medium cursor-pointer transition-all duration-200 ease-out select-none whitespace-nowrap outline-none ${btnSizeClass} ${
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
      
      {/* Responsive wrapper size that perfectly aligns with dynamic radii dimensions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] relative flex items-center justify-center flex-shrink-0"
      >
        {/* Center core: solid orange circle with Code Lucide Icon */}
        <div 
          style={{
            boxShadow: "0 0 30px rgba(255, 107, 53, 0.45)",
          }}
          className={`rounded-full bg-[#FF6B35] flex items-center justify-center z-35 transition-transform duration-300 hover:scale-105 ${
            screenSize === "xs" ? "w-8 h-8" : screenSize === "sm" ? "w-10 h-10" : "w-12 h-12"
          }`}
        >
          <Code2 className={screenSize === "xs" ? "w-4 h-4 text-white" : "w-5 h-5 text-white"} />
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
