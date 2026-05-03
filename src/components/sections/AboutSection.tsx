"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap, Mail, Sparkles, MapPin } from "lucide-react";
import { SiGithub as Github } from "react-icons/si";
import { FaLinkedin as Linkedin } from "react-icons/fa";

const aboutStats = [
  { label: "Location", value: "Manila, Philippines", icon: MapPin },
  { label: "Focus", value: "UI/UX + Web Dev", icon: Briefcase },
  { label: "Status", value: "Open for projects", icon: Sparkles },
  { label: "Studying", value: "BS Computer Science", icon: GraduationCap },
];

const bubbles = [
  { label: "Email", icon: Mail },
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin },
];

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
          <p className="uppercase tracking-[0.35em] text-xs mb-3" style={{ color: "var(--color-muted)" }}>
            About Me
          </p>
          <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            <span style={{ color: "#FFFFFF" }}>A Quick</span>{" "}
            <span style={{ color: "var(--color-accent)" }}>Bubble</span>{" "}
            <span style={{ color: "#FFFFFF" }}>of Basic</span>{" "}
            <span style={{ color: "var(--color-accent)" }}>Info</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] p-6 md:p-8 border overflow-hidden backdrop-blur-2xl"
          style={{
            background: "rgba(255,255,255,0.14)",
            borderColor: "rgba(13,59,110,0.16)",
            boxShadow: "0 30px 90px rgba(13,59,110,0.12), inset 0 0 30px rgba(255,255,255,0.08)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(13,59,110,0.08),transparent_30%)]" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] mb-5"
                style={{ background: "rgba(13,59,110,0.08)", color: "var(--color-text)" }}
              >
                <Sparkles className="w-4 h-4" />
                Ocean Profile Card
              </div>

              <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--color-text)" }}>
                I&apos;m a computer science student who likes building calm, immersive interfaces,
                combining UI/UX, frontend development, and motion design. This section is just a
                placeholder for now, but it gives the portfolio a proper home for the details that
                were previously sitting inside the hero.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {aboutStats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="rounded-2xl p-4 border"
                    style={{
                      background: "rgba(13, 59, 110, 0.42)",
                      borderColor: "rgba(255,255,255,0.15)",
                    }}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white/12 text-white">
                        <item.icon className="w-4 h-4" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.28em]" style={{ color: "var(--color-muted)" }}>
                        {item.label}
                      </span>
                    </div>
                    <p className="text-white font-medium">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border p-5 backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(13,59,110,0.34) 0%, rgba(13,59,110,0.16) 100%)",
                borderColor: "rgba(255,255,255,0.18)",
                boxShadow: "none",
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
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#0D3B6E] bg-white/50 px-3 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  Reach Out
                </span>
              </div>
              <div className="relative z-10 flex flex-col gap-2.5">
                {bubbles.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/18 border border-white/22 text-white text-xs relative overflow-hidden backdrop-blur-md w-full"
                    style={{ boxShadow: "none", minHeight: "2.6rem" }}
                  >
                    <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/20 shrink-0">
                      <item.icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="relative z-10">{item.label}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
