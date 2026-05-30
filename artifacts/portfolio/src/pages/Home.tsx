import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUpRight, Code2, Database, Terminal, MapPin, Building, Trophy, GraduationCap, Award, Download } from "lucide-react";
import avatarImg from "@assets/image_1780140069977.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* Background ambient elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        {/* Navigation / Header */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-between items-center mb-32"
        >
          <div className="font-mono text-sm tracking-widest text-primary font-bold">MA.</div>
          <div className="flex gap-6 items-center text-sm font-medium">
            <a href="mailto:abdullahrauf245@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="mb-40 flex flex-col-reverse md:flex-row gap-12 items-center justify-between">
          <motion.div 
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono mb-6 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Available for impact
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Muhammad <br />
              <span className="text-muted-foreground">Abdullah.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-xl">
              <strong className="text-foreground font-semibold">Curious. Resourceful. Driven.</strong> <br/>
              A Data Science builder thinking from first principles.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="https://github.com/abdullahrauf245-hue/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-md bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-all font-medium text-sm group">
                <SiGithub className="w-4 h-4 group-hover:text-primary transition-colors" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammad-abdullahrauf/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-md bg-card hover:bg-card/80 border border-border hover:border-secondary/50 transition-all font-medium text-sm group">
                <FaLinkedin className="w-4 h-4 group-hover:text-secondary transition-colors" /> LinkedIn
              </a>
              <a href="/Muhammad_Abdullah_CV.pdf" download="Muhammad_Abdullah_CV.pdf" className="flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium text-sm group">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 blur-lg" />
            <div className="absolute inset-0 border border-primary/30 rounded-2xl -rotate-3" />
            <img 
              src={avatarImg} 
              alt="Muhammad Abdullah" 
              className="w-full h-full object-cover rounded-2xl relative z-10 border border-border shadow-2xl grayscale-[20%] contrast-125"
            />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-border flex-1" />
            <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">About</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h3 className="text-3xl font-semibold leading-snug">
              I study Data Science at NUST Islamabad. But my real education happens when I build.
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                As a Full Merit Scholar (2025-2029), I merge academic rigor with a hacker's mindset. My background spans from being a District Topper in Chakwal to leading logistics for major university events.
              </p>
              <p>
                I don't just write code; I orchestrate systems. Whether it's crafting full-stack web products, managing multi-venue logistics, or designing databases, I focus on solving real, tangible problems.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" /> Islamabad & Chakwal, PK
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building className="w-4 h-4 text-primary" /> NUST
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Selected Work</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid gap-8">
            {[
              {
                title: "Muslim Traders",
                desc: "Web platform for a 1988-founded Chakwal distribution network spanning 375+ distributors and 400K+ retail stores across Pakistan.",
                tags: ["Next.js", "Full Stack", "Enterprise"],
                link: "https://muslim-traders.vercel.app"
              },
              {
                title: "NUST Events & Society Portal",
                desc: "Full-stack event discovery platform for NUST with role-based access (Guest/Student/Organizer), live filtering, and Supabase backend.",
                tags: ["React", "Supabase", "Role-based Auth"],
                link: "https://nust-pulse.vercel.app"
              },
              {
                title: "NUSTCafe",
                desc: "Centralized search & filter system covering 9 NUST campus cafes, built collaboratively with the BSDS-3A team.",
                tags: ["Frontend", "Search", "Team Collab"],
                link: "https://nustcafe.vercel.app"
              }
            ].map((project, idx) => (
              <motion.a 
                key={idx}
                variants={fadeInUp}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group block p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground max-w-2xl mb-6">{project.desc}</p>
                
                <div className="flex gap-3 text-xs font-mono text-muted-foreground">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-muted rounded">{tag}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Technical Arsenal</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card/50">
              <Code2 className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-semibold mb-4">Languages</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">C++, Java, Python, SQL, JavaScript, HTML, CSS</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50">
              <Terminal className="w-6 h-6 text-secondary mb-4" />
              <h4 className="font-semibold mb-4">Frameworks</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">React, Next.js, Node.js, Tailwind CSS</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50">
              <Database className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-semibold mb-4">Data & Tools</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">MongoDB, Supabase, Git, GitHub, Vercel</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50">
              <Award className="w-6 h-6 text-secondary mb-4" />
              <h4 className="font-semibold mb-4">Certifications</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">AI Fluency Framework & Foundations (Anthropic Certified)</p>
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE & LEADERSHIP */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Experience & Leadership</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="relative border-l border-border ml-3 md:ml-0 md:pl-6 space-y-12">
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
                <div className="absolute -left-[33px] md:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-primary/20 border border-primary ring-4 ring-background" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-primary font-medium text-sm">@ {exp.org}</span>
                  <span className="text-xs font-mono text-muted-foreground md:ml-auto">{exp.date}</span>
                </div>
                <p className="text-muted-foreground text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Education</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="p-6 border border-border rounded-xl bg-card hover:border-primary/30 transition-colors">
              <GraduationCap className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-bold mb-1">NUST Islamabad</h4>
              <p className="text-sm text-secondary font-medium mb-3">Bachelor's Data Science</p>
              <p className="text-sm text-muted-foreground">Full Merit Scholar<br/>Sep 2025 – Sep 2029</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 border border-border rounded-xl bg-card hover:border-primary/30 transition-colors">
              <Building className="w-6 h-6 text-muted-foreground mb-4" />
              <h4 className="font-bold mb-1">Punjab College Chakwal</h4>
              <p className="text-sm text-muted-foreground mb-3">Intermediate</p>
              <p className="text-sm text-muted-foreground">1069/1200<br/>2023-2025</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 border border-border rounded-xl bg-card hover:border-secondary/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full" />
              <Trophy className="w-6 h-6 text-secondary mb-4 relative z-10" />
              <h4 className="font-bold mb-1 relative z-10">DPS Chakwal</h4>
              <p className="text-sm text-muted-foreground mb-3 relative z-10">Matriculation</p>
              <p className="text-sm text-muted-foreground relative z-10">1059/1100<br/><span className="text-secondary">District Topper 2023</span></p>
            </motion.div>
          </div>
        </motion.section>

        {/* FOOTER / CONTACT */}
        <motion.footer 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-border pt-12 pb-24 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Let's build something.</h2>
            <a href="mailto:abdullahrauf245@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
              abdullahrauf245@gmail.com
            </a>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/abdullahrauf245-hue/" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-card rounded-full border border-border hover:border-primary/50">
              <SiGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-abdullahrauf/" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-card rounded-full border border-border hover:border-secondary/50">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.footer>

      </div>
    </div>
  );
}
