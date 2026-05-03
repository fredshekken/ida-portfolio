"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap, Mail, Sparkles, MapPin } from "lucide-react";
import { SiGithub as Github } from "react-icons/si";
import GithubHeatmap from "@/components/ui/GithubHeatmap";
import { FaLinkedin as Linkedin } from "react-icons/fa";

const aboutStats = [
  { label: "Location", value: "Manila, Philippines", icon: MapPin },
  { label: "Focus", value: "UI/UX + Web Dev", icon: Briefcase },
  { label: "Status", value: "Open for projects", icon: Sparkles },
  { label: "Studying", value: "BS Computer Science", icon: GraduationCap },
];

const bubbles = [
  { label: "Email", icon: Mail, href: "#contact" },
  { label: "GitHub", icon: Github, href: "https://github.com/fredshekken" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/ida-magaan" },
];

const tools = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#68A063" },
  { name: "Express", color: "#FFFFFF" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Tailwind", color: "#38BDF8" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Git", color: "#F05032" },
  { name: "Vercel", color: "#FFFFFF" },
  { name: "Unity", color: "#FFFFFF" },
  { name: "GIMP", color: "#7EC8E3" },
  { name: "Python", color: "#FFD43B" },
  { name: "Java", color: "#F89820" },
  { name: "Canva", color: "#00C4CC" },
];

const doubled = [...tools, ...tools];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-20 overflow-hidden" style={{ background: "transparent" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${14 + (i % 4) * 10}px`,
              height: `${14 + (i % 4) * 10}px`,
              left: `${6 + i * 7}%`,
              top: `${10 + (i % 5) * 14}%`,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display font-bold text-glow-header" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            <span style={{ color: "#FFFFFF" }}>A Quick</span>{" "}
            <span style={{ color: "var(--hero-blue)" }}>Bubble</span>{" "}
            <span style={{ color: "#FFFFFF" }}>of Basic</span>{" "}
            <span style={{ color: "var(--hero-blue)" }}>Info</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[1.75rem] p-6 md:p-8 border backdrop-blur-md"
          style={{
            background: "linear-gradient(135deg, rgba(13,59,110,0.34) 0%, rgba(13,59,110,0.16) 100%)",
            borderColor: "rgba(255,255,255,0.18)",
            boxShadow: "none",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(13,59,110,0.08),transparent_30%)]" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border p-6 backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(13,59,110,0.24) 0%, rgba(13,59,110,0.12) 100%)",
                borderColor: "rgba(255,255,255,0.14)",
                boxShadow: "none",
                height: "100%",
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_35%)]" />

              <div className="relative z-10 flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-white/20 bg-white/6 flex items-center justify-center text-xl font-bold text-white">
                  FM
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-hero-blue text-glow-white">
                      Ocean Explorer ID
                    </p>
                  <h3 className="text-lg font-bold text-white">Frieda Marie V. Magaan</h3>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "rgba(0, 201, 167, 0.15)",
                    border: "1px solid rgba(0, 201, 167, 0.4)",
                    fontSize: "12px",
                    color: "#00C9A7",
                    marginTop: "12px",
                  }}>
                    <div style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#00C9A7",
                      boxShadow: "0 0 6px #00C9A7",
                    }} />
                    Open to OJT 2026
                  </div>
                </div>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="inline-flex flex-col">
                  <span className="text-xs uppercase tracking-[0.25em] text-hero-blue text-glow-white">Name</span>
                  <span className="font-medium" style={{ color: "#B8E4F9" }}>Frieda Marie V. Magaan</span>
                </div>
                <div className="inline-flex flex-col">
                  <span className="text-xs uppercase tracking-[0.25em] text-hero-blue text-glow-white">Role</span>
                  <span className="font-medium" style={{ color: "#B8E4F9" }}>Front-end Developer · UI/UX Designer</span>
                </div>
                <div className="inline-flex flex-col">
                  <span className="text-xs uppercase tracking-[0.25em] text-hero-blue text-glow-white">Program</span>
                  <span className="font-medium" style={{ color: "#B8E4F9" }}>Computer Science · PLM CISTM</span>
                </div>
              </div>

              <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-4" style={{ color: "#B8E4F9" }}>
                I&apos;m a CS student at PLM who lives between design and code. I care a lot about UI/UX and frontend work, and I think the best interfaces are the ones people don't have to think about.
              </p>

              {/* stat tiles removed per request - kept profile ID, fields and description */}
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border p-5 backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(13,59,110,0.34) 0%, rgba(13,59,110,0.16) 100%)",
                borderColor: "rgba(255,255,255,0.18)",
                boxShadow: "none",
                height: "100%",
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.2),transparent_35%)]" />
              <div className="relative z-10 flex items-center justify-between gap-4 mb-4">
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "#D9F3FF" }}>
                  Contact Bubbles
                </p>
                <button
                  type="button"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#0D3B6E] bg-white/50 px-3 py-1 rounded-full"
                >
                  <ArrowUpRight className="w-3 h-3" />
                  Reach Out
                </button>
              </div>
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {bubbles.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/18 border border-white/22 text-white text-xs relative overflow-hidden backdrop-blur-md"
                    style={{ boxShadow: "none", minHeight: "2.35rem" }}
                  >
                    <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/20 shrink-0">
                      <item.icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="relative z-10 mt-5">
                <GithubHeatmap username="fredshekken" />
              </div>

              {/* ticker removed from right card; moved below as full-width row */}
            </motion.div>
          </div>

          {/* Full-width ticker row below the two cards */}
          <div style={{ marginTop: "16px", overflow: "hidden", width: "100%", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
            <motion.div
              style={{
                display: "flex",
                gap: "8px",
                width: "max-content",
              }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {doubled.map((tool, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <div style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: tool.color,
                    boxShadow: `0 0 6px ${tool.color}`,
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 500,
                  }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
