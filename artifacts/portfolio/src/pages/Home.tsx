import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUpRight, Code2, Database, Terminal, MapPin, Building, Trophy, GraduationCap, Award, Download, X, Send, CheckCircle2, Loader2, Accessibility, Type, Eye, Zap, ChevronUp } from "lucide-react";
import avatarImg from "@assets/image_1780140069977.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Parallax hook for individual sections
function useParallax(offset: number = 50) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return { ref, y };
}

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [a11y, setA11y] = useState({ fontSize: 0, highContrast: false, reducedMotion: false, menuOpen: false });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Per-section parallax refs
  const heroParallax = useParallax(40);
  const aboutParallax = useParallax(30);
  const projectsParallax = useParallax(35);
  const skillsParallax = useParallax(25);
  const experienceParallax = useParallax(30);
  const educationParallax = useParallax(25);

  // Background ambient blobs parallax
  const bgBlobY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgBlobY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isContactOpen]);

  // Apply accessibility font size class to root
  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = `${100 + a11y.fontSize * 12.5}%`;
    if (a11y.highContrast) {
      html.classList.add('a11y-high-contrast');
    } else {
      html.classList.remove('a11y-high-contrast');
    }
    return () => {
      html.style.fontSize = '';
      html.classList.remove('a11y-high-contrast');
    };
  }, [a11y.fontSize, a11y.highContrast]);

  const motionProps = a11y.reducedMotion ? { initial: undefined, animate: undefined, whileInView: undefined, variants: undefined, transition: { duration: 0 } } : {};

  return (
    <div className={`min-h-screen bg-[var(--color-background-primary)] text-[var(--color-text-primary)] overflow-x-hidden selection:bg-[var(--color-accent-orange)]/20 selection:text-[var(--color-accent-orange)] ${a11y.highContrast ? 'a11y-high-contrast' : ''}`}>
      
      {/* Background ambient grid/lights with parallax */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <motion.div style={{ y: a11y.reducedMotion ? 0 : bgBlobY }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-accent-orange)]/5 blur-[140px]" />
        <motion.div style={{ y: a11y.reducedMotion ? 0 : bgBlobY2 }} className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--color-accent-lime)]/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        {/* Navigation / Header */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-between items-center mb-24 md:mb-32"
        >
          <div className="font-satoshi text-xl tracking-widest text-[var(--color-accent-orange)] font-bold">MA.</div>
          <div className="flex gap-6 items-center text-sm">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="font-satoshi text-xs uppercase tracking-wider font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-accent-orange)] transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-none outline-none"
            >
              <Mail className="w-4 h-4" /> <span>Get In Touch</span>
            </button>
          </div>
        </motion.nav>

        {/* HERO SECTION with parallax */}
        <motion.div ref={heroParallax.ref} style={{ y: a11y.reducedMotion ? 0 : heroParallax.y }}>
        <section className="mb-32 md:mb-40 flex flex-col-reverse md:flex-row gap-12 items-center justify-between">
          <motion.div 
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-lime)]/10 text-[var(--color-accent-lime)] text-xs font-satoshi font-bold uppercase tracking-wider mb-6 border border-[var(--color-accent-lime)]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-lime)] animate-pulse" />
              Available for impact
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-poppins font-bold tracking-tighter mb-6 leading-[0.95] text-white">
              Muhammad <br />
              <span className="text-[var(--color-accent-orange)]">Abdullah.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[var(--color-text-secondary)] font-poppins font-normal mb-8 max-w-xl leading-relaxed">
              <strong className="text-white font-semibold">Curious. Resourceful. Driven.</strong> <br/>
              A Data Science builder thinking from first principles.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="/Muhammad_Abdullah_CV.pdf" download="Muhammad_Abdullah_CV.pdf" className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-accent-orange)] text-white hover:bg-[var(--color-accent-orange)]/90 transition-all font-satoshi font-bold text-xs tracking-wider uppercase shadow-lg shadow-[var(--color-accent-orange)]/20 hover:scale-105 duration-200 group">
                <Download className="w-4 h-4" /> Download CV
              </a>
              <a href="https://github.com/abdullahrauf245-hue/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-[var(--color-border-subtle)]/40 hover:border-white transition-all font-satoshi font-bold text-xs tracking-wider uppercase text-white hover:scale-105 duration-200">
                <SiGithub className="w-4 h-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammad-abdullahrauf/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-[var(--color-border-subtle)]/40 hover:border-white transition-all font-satoshi font-bold text-xs tracking-wider uppercase text-white hover:scale-105 duration-200">
                <FaLinkedin className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Card component */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[350px] bg-white text-black rounded-2xl p-6 shadow-2xl border border-[var(--color-border-subtle)] flex-shrink-0 flex flex-col gap-4 hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-xl bg-stone-100">
              <img 
                src={avatarImg} 
                alt="Muhammad Abdullah" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[var(--color-accent-orange)] text-white text-[10px] font-satoshi font-bold uppercase tracking-wider">
                BS Data Science
              </div>
            </div>
            <div>
              <h3 className="font-poppins font-bold text-2xl tracking-tight text-black mb-1">M. Abdullah</h3>
              <p className="font-poppins text-xs text-stone-500 font-medium">BS Data Science @ NUST</p>
            </div>
            <p className="font-poppins text-sm text-stone-600 leading-relaxed font-normal">
              Full Merit Scholar & Data Science builder thinking from first principles. Chakwal District Topper.
            </p>
            <div className="h-px bg-stone-200 my-1" />
            <div className="flex justify-between items-center">
              <span className="font-satoshi text-xs font-bold text-[var(--color-accent-orange)] tracking-widest uppercase">Let's Connect</span>
              <div className="flex gap-2.5">
                <a href="https://github.com/abdullahrauf245-hue/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-100 hover:bg-[var(--color-accent-orange)] hover:text-white flex items-center justify-center text-stone-800 transition-colors">
                  <SiGithub className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-abdullahrauf/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-100 hover:bg-[var(--color-accent-orange)] hover:text-white flex items-center justify-center text-stone-800 transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="w-8 h-8 rounded-full bg-stone-100 hover:bg-[var(--color-accent-orange)] hover:text-white flex items-center justify-center text-stone-800 transition-colors cursor-pointer border-none outline-none"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
        </motion.div>

        {/* ABOUT SECTION with parallax */}
        <motion.div ref={aboutParallax.ref} style={{ y: a11y.reducedMotion ? 0 : aboutParallax.y }}>
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-32 md:mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-[var(--color-border-subtle)]/20 flex-1" />
            <h2 className="text-sm font-satoshi font-bold text-[var(--color-accent-orange)] tracking-widest uppercase">About</h2>
            <div className="h-px bg-[var(--color-border-subtle)]/20 flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h3 className="text-3xl font-poppins font-bold leading-tight tracking-tight text-white">
              I study Data Science at NUST Islamabad. But my real education happens when I build.
            </h3>
            <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed font-poppins font-normal text-[15px]">
              <p>
                As a Full Merit Scholar (2025-2029), I merge academic rigor with a hacker's mindset. My background spans from being a District Topper in Chakwal to leading logistics for major university events.
              </p>
              <p>
                I don't just write code; I orchestrate systems. Whether it's crafting full-stack web products, managing multi-venue logistics, or designing databases, I focus on solving real, tangible problems.
              </p>
              <div className="flex gap-6 pt-4 text-white">
                <div className="flex items-center gap-2 text-xs font-satoshi font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[var(--color-accent-orange)]" /> Islamabad, PK
                </div>
                <div className="flex items-center gap-2 text-xs font-satoshi font-bold uppercase tracking-wider">
                  <Building className="w-4 h-4 text-[var(--color-accent-orange)]" /> NUST SEECS
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        </motion.div>

        {/* PROJECTS SECTION with parallax */}
        <motion.div ref={projectsParallax.ref} style={{ y: a11y.reducedMotion ? 0 : projectsParallax.y }}>
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-satoshi font-bold text-[var(--color-accent-lime)] tracking-widest uppercase">Selected Work</h2>
            <div className="h-px bg-[var(--color-border-subtle)]/20 flex-1" />
          </div>

          <div className="grid gap-8">
            {[
              {
                title: "Muslim Traders",
                desc: "Web platform for a 1988-founded Chakwal distribution network spanning 375+ distributors and 400K+ retail stores across Pakistan.",
                tags: ["Next.js", "Full Stack", "Enterprise"],
                link: "https://muslim-traders.vercel.app",
                github: "https://github.com/abdullahrauf245-hue/muslim-traders-2"
              },
              {
                title: "NUST Events & Society Portal",
                desc: "Full-stack event discovery platform for NUST with role-based access (Guest/Student/Organizer), live filtering, and Supabase backend.",
                tags: ["React", "Supabase", "Role-based Auth"],
                link: "https://nust-pulse.vercel.app",
                github: "https://github.com/abdullahrauf245-hue/Nust-society-and-portal-system"
              },
              {
                title: "NUSTCafe",
                desc: "Centralized search & filter system covering 9 NUST campus cafes, built collaboratively with the BSDS-3A team.",
                tags: ["Frontend", "Search", "Team Collab"],
                link: "https://nustcafe.vercel.app",
                github: "https://github.com/abdullahrauf245-hue/nustcafe"
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group block p-8 rounded-2xl bg-[#080808] border border-[var(--color-border-subtle)]/15 hover:border-[var(--color-accent-orange)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-6 h-6 text-[var(--color-accent-orange)]" />
                </div>
                
                <h3 className="text-2xl font-poppins font-bold mb-3 text-white group-hover:text-[var(--color-accent-orange)] transition-colors">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] max-w-2xl mb-6 font-poppins font-normal text-sm">{project.desc}</p>
                
                <div className="flex flex-wrap items-center gap-2.5 mb-6 text-[10px] font-satoshi font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-white">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-accent-orange)] text-white font-satoshi font-bold text-[10px] tracking-wider uppercase hover:bg-[var(--color-accent-orange)]/90 transition-all hover:scale-105 duration-200"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" /> Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent border border-[var(--color-border-subtle)]/30 text-white font-satoshi font-bold text-[10px] tracking-wider uppercase hover:bg-white/5 hover:border-white transition-all hover:scale-105 duration-200"
                  >
                    <SiGithub className="w-3.5 h-3.5" /> GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        </motion.div>

        {/* SKILLS SECTION with parallax */}
        <motion.div ref={skillsParallax.ref} style={{ y: a11y.reducedMotion ? 0 : skillsParallax.y }}>
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-32 md:mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-satoshi font-bold text-[var(--color-accent-orange)] tracking-widest uppercase">Technical Arsenal</h2>
            <div className="h-px bg-[var(--color-border-subtle)]/20 flex-1" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--color-accent-orange)] text-white shadow-xl border border-[var(--color-accent-orange)] hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between min-h-[220px]">
              <div>
                <Code2 className="w-8 h-8 text-white mb-4" />
                <h4 className="font-poppins font-bold text-lg mb-2 text-white">Languages</h4>
              </div>
              <p className="text-sm text-white/95 leading-relaxed font-poppins font-medium">{`C++, Java, Python, SQL, JavaScript, HTML, CSS`}</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-accent-lime)] text-black shadow-xl border border-[var(--color-accent-lime)] hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between min-h-[220px]">
              <div>
                <Terminal className="w-8 h-8 text-black mb-4" />
                <h4 className="font-poppins font-bold text-lg mb-2 text-black">Frameworks</h4>
              </div>
              <p className="text-sm text-black/95 leading-relaxed font-poppins font-semibold">React, Next.js, Node.js, Tailwind CSS</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-accent-orange)] text-white shadow-xl border border-[var(--color-accent-orange)] hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between min-h-[220px]">
              <div>
                <Database className="w-8 h-8 text-white mb-4" />
                <h4 className="font-poppins font-bold text-lg mb-2 text-white">Data & Tools</h4>
              </div>
              <p className="text-sm text-white/95 leading-relaxed font-poppins font-medium">MongoDB, Supabase, Git, GitHub, Vercel</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-accent-lime)] text-black shadow-xl border border-[var(--color-accent-lime)] hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between min-h-[220px]">
              <div>
                <Award className="w-8 h-8 text-black mb-4" />
                <h4 className="font-poppins font-bold text-lg mb-2 text-black">Certifications</h4>
              </div>
              <p className="text-sm text-black/95 leading-relaxed font-poppins font-semibold">AI Fluency Framework & Foundations (Anthropic Certified)</p>
            </div>
          </div>
        </motion.section>
        </motion.div>

        {/* EXPERIENCE & LEADERSHIP with parallax */}
        <motion.div ref={experienceParallax.ref} style={{ y: a11y.reducedMotion ? 0 : experienceParallax.y }}>
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-satoshi font-bold text-[var(--color-accent-lime)] tracking-widest uppercase">Experience & Leadership</h2>
            <div className="h-px bg-[var(--color-border-subtle)]/20 flex-1" />
          </div>

          <div className="relative border-l border-[var(--color-border-subtle)]/20 ml-3 md:ml-0 md:pl-6 space-y-12">
            {[
              {
                role: "Forward Program Learner",
                org: "McKinsey.org",
                date: "May 2026 – Present",
                desc: "Selected into the Forward Program; building foundations in business and analytical thinking."
              },
              {
                role: "Communications Executive",
                org: "NUST Entrepreneurs Club",
                date: "Oct 2025 – Present",
                desc: "Handled internal/external communications, managed outreach, drafted announcements."
              },
              {
                role: "Logistics Executive",
                org: "HAAMI NUST",
                date: "Feb 2026 – Present",
                desc: "Managed end-to-end logistics for NUST's largest student fundraising initiative."
              },
              {
                role: "Finance Executive",
                org: "NUST Cultural Fest",
                date: "Dec 2025 – Feb 2026",
                desc: "Budgeting, expense tracking, post-event financial reporting."
              },
              {
                role: "Logistics Executive",
                org: "NUST Olympiad",
                date: "Nov 2025 – Feb 2026",
                desc: "Coordinated operations across multiple venues and participant teams."
              },
              {
                role: "Finance Executive",
                org: "ASME NUST Chapter",
                date: "Oct 2025 – Dec 2025",
                desc: "Budget management and financial operations for EFX festival."
              }
            ].map((exp, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative pl-6 md:pl-0">
                <div className="absolute -left-[33px] md:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent-orange)]/20 border border-[var(--color-accent-orange)] ring-4 ring-[var(--color-background-primary)]" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <h3 className="text-lg font-poppins font-bold text-white">{exp.role}</h3>
                  <span className="text-[var(--color-accent-orange)] font-satoshi font-bold text-xs uppercase tracking-wider">@ {exp.org}</span>
                  <span className="text-xs font-mono text-[var(--color-text-muted)] md:ml-auto">{exp.date}</span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm font-poppins font-normal leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        </motion.div>

        {/* EDUCATION with parallax */}
        <motion.div ref={educationParallax.ref} style={{ y: a11y.reducedMotion ? 0 : educationParallax.y }}>
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-satoshi font-bold text-[var(--color-accent-orange)] tracking-widest uppercase">Education</h2>
            <div className="h-px bg-[var(--color-border-subtle)]/20 flex-1" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="p-6 border border-[var(--color-border-subtle)]/15 rounded-2xl bg-[#080808] hover:border-[var(--color-accent-orange)] transition-colors duration-300">
              <GraduationCap className="w-6 h-6 text-[var(--color-accent-orange)] mb-4" />
              <h4 className="font-poppins font-bold text-lg mb-1 text-white">NUST Islamabad</h4>
              <p className="text-sm text-[var(--color-accent-lime)] font-satoshi font-bold uppercase tracking-wider mb-3">Bachelor's Data Science</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">Full Merit Scholar<br/>Sep 2025 – Sep 2029</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 border border-[var(--color-border-subtle)]/15 rounded-2xl bg-[#080808] hover:border-[var(--color-accent-lime)] transition-colors duration-300">
              <Building className="w-6 h-6 text-[var(--color-text-secondary)] mb-4" />
              <h4 className="font-poppins font-bold text-lg mb-1 text-white">Punjab College Chakwal</h4>
              <p className="text-sm text-[var(--color-text-secondary)] font-satoshi font-bold uppercase tracking-wider mb-3">Intermediate</p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">1069/1200<br/>2023-2025</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 border border-[var(--color-border-subtle)]/15 rounded-2xl bg-[#080808] hover:border-[var(--color-accent-orange)] transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent-orange)]/5 rounded-bl-full" />
              <Trophy className="w-6 h-6 text-[var(--color-accent-orange)] mb-4 relative z-10" />
              <h4 className="font-poppins font-bold text-lg mb-1 relative z-10 text-white">DPS Chakwal</h4>
              <p className="text-sm text-[var(--color-accent-lime)] font-satoshi font-bold uppercase tracking-wider mb-3 relative z-10">Matriculation</p>
              <p className="text-xs text-[var(--color-text-secondary)] relative z-10 leading-relaxed">1059/1100<br/><span className="text-[var(--color-accent-orange)] font-bold">District Topper 2023</span></p>
            </motion.div>
          </div>
        </motion.section>
        </motion.div>

        {/* FOOTER / CONTACT */}
        <motion.footer 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-[var(--color-border-subtle)]/15 pt-12 pb-24 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl font-poppins font-bold mb-2 text-white">Let's build something.</h2>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-orange)] transition-colors text-sm font-poppins font-medium flex items-center gap-2 cursor-pointer bg-transparent border-none outline-none"
            >
              abdullahrauf245@gmail.com
            </button>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/abdullahrauf245-hue/" className="text-[var(--color-text-secondary)] hover:text-white transition-colors p-3 bg-[#080808] rounded-full border border-[var(--color-border-subtle)]/15 hover:border-[var(--color-accent-orange)]">
              <SiGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-abdullahrauf/" className="text-[var(--color-text-secondary)] hover:text-white transition-colors p-3 bg-[#080808] rounded-full border border-[var(--color-border-subtle)]/15 hover:border-[var(--color-accent-orange)]">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.footer>

      </div>

      {/* Contact Modal overlay */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactModal onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>

      {/* Accessibility Widget */}
      <div className="fixed bottom-6 left-6 z-50">
        <AnimatePresence>
          {a11y.menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="mb-3 w-[260px] bg-[#0a0a0a] border border-[var(--color-border-subtle)]/30 rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-satoshi font-bold text-white uppercase tracking-wider">Accessibility</h3>
                <button
                  onClick={() => setA11y(prev => ({ ...prev, menuOpen: false }))}
                  className="text-stone-500 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none p-1"
                  aria-label="Close accessibility menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Font Size */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Type className="w-4 h-4 text-[var(--color-accent-orange)]" />
                  <span className="text-xs font-satoshi font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Font Size</span>
                </div>
                <div className="flex gap-2">
                  {[-1, 0, 1, 2].map(level => (
                    <button
                      key={level}
                      onClick={() => setA11y(prev => ({ ...prev, fontSize: level }))}
                      className={`flex-1 py-2 rounded-lg text-xs font-satoshi font-bold transition-all cursor-pointer border-none outline-none ${
                        a11y.fontSize === level
                          ? 'bg-[var(--color-accent-orange)] text-white'
                          : 'bg-white/5 text-stone-400 hover:bg-white/10'
                      }`}
                    >
                      {level === -1 ? 'S' : level === 0 ? 'M' : level === 1 ? 'L' : 'XL'}
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="mb-4">
                <button
                  onClick={() => setA11y(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-satoshi font-bold uppercase tracking-wider transition-all cursor-pointer border-none outline-none ${
                    a11y.highContrast
                      ? 'bg-[var(--color-accent-lime)]/15 text-[var(--color-accent-lime)] border border-[var(--color-accent-lime)]/30'
                      : 'bg-white/5 text-stone-400 hover:bg-white/10'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  High Contrast
                  <span className="ml-auto text-[10px]">{a11y.highContrast ? 'ON' : 'OFF'}</span>
                </button>
              </div>

              {/* Reduced Motion */}
              <div>
                <button
                  onClick={() => setA11y(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-satoshi font-bold uppercase tracking-wider transition-all cursor-pointer border-none outline-none ${
                    a11y.reducedMotion
                      ? 'bg-[var(--color-accent-lime)]/15 text-[var(--color-accent-lime)] border border-[var(--color-accent-lime)]/30'
                      : 'bg-white/5 text-stone-400 hover:bg-white/10'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Reduce Motion
                  <span className="ml-auto text-[10px]">{a11y.reducedMotion ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating trigger button */}
        <button
          onClick={() => setA11y(prev => ({ ...prev, menuOpen: !prev.menuOpen }))}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer border-none outline-none hover:scale-110 ${
            a11y.menuOpen
              ? 'bg-[var(--color-accent-orange)] text-white rotate-0'
              : 'bg-[#111] border border-[var(--color-border-subtle)]/30 text-stone-400 hover:text-white hover:border-[var(--color-accent-orange)]'
          }`}
          aria-label="Toggle accessibility menu"
        >
          <Accessibility className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// Contact Modal Component
function ContactModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    try {
      const response = await fetch("https://formsubmit.co/ajax/abdullahrauf245@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _honey: "", // Honeypot field for spam prevention
        })
      });

      const result = await response.json();
      if (response.ok && result.success === "true") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Card with slide-up and scale spring animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
        className="relative w-full max-w-4xl bg-[#080808] border border-[var(--color-border-subtle)]/30 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row min-h-[500px]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-20 cursor-pointer border-none outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Info Column (Left) with large @ symbol background */}
        <div className="relative flex-1 p-8 md:p-12 overflow-hidden flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--color-border-subtle)]/15">
          {/* Watermark @ Symbol */}
          <div className="absolute -bottom-24 -left-24 text-[30rem] font-bold text-white/[0.02] select-none pointer-events-none leading-none">
            @
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold tracking-tight text-white mb-6">
              Contact<span className="text-[var(--color-accent-orange)]">.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] font-poppins text-[15px] font-normal leading-relaxed max-w-sm">
              Got a collaboration idea? Want to connect? I'm always open to learning and building together!
            </p>
          </div>

          <div className="relative z-10 mt-12 md:mt-0 space-y-4">
            <div className="text-xs font-satoshi font-bold uppercase tracking-widest text-[var(--color-accent-orange)]">
              Direct Mail
            </div>
            <a 
              href="mailto:abdullahrauf245@gmail.com" 
              className="text-white hover:text-[var(--color-accent-orange)] font-poppins text-lg font-medium transition-colors"
            >
              abdullahrauf245@gmail.com
            </a>
          </div>
        </div>

        {/* Form Column (Right) */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-8 flex flex-col items-center justify-center h-full"
              >
                <div className="w-16 h-16 bg-[var(--color-accent-lime)]/10 rounded-full flex items-center justify-center mb-6 border border-[var(--color-accent-lime)]/20 animate-pulse">
                  <CheckCircle2 className="w-8 h-8 text-[var(--color-accent-lime)]" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-[var(--color-text-secondary)] font-poppins text-sm leading-relaxed max-w-sm">
                  Thank you for reaching out. Abdullah has received your email and will get back to you shortly.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-xs font-satoshi font-bold tracking-widest uppercase transition-all cursor-pointer outline-none"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-poppins">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-satoshi font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={status === "submitting"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-[var(--color-border-subtle)]/30 rounded-xl px-4 py-3 text-white text-sm font-poppins placeholder-stone-600 focus:outline-none focus:border-[var(--color-accent-orange)] transition-colors disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-satoshi font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={status === "submitting"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-[var(--color-border-subtle)]/30 rounded-xl px-4 py-3 text-white text-sm font-poppins placeholder-stone-600 focus:outline-none focus:border-[var(--color-accent-lime)] transition-colors disabled:opacity-50"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-satoshi font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    disabled={status === "submitting"}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-[var(--color-border-subtle)]/30 rounded-xl px-4 py-3 text-white text-sm font-poppins placeholder-stone-600 focus:outline-none focus:border-[var(--color-accent-orange)] transition-colors resize-none disabled:opacity-50"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[var(--color-accent-orange)] hover:bg-[var(--color-accent-orange)]/90 text-white font-satoshi font-bold text-xs tracking-wider uppercase transition-all hover:scale-[1.01] duration-200 cursor-pointer disabled:opacity-50 disabled:hover:scale-100 border-none outline-none"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </span>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
