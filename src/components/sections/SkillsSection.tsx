"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    zone: "0-50M · SUNLIGHT ZONE",
    title: "Frontend Development",
    depth: "0m",
    accentColor: "#7ECECA",
    icon: Code2,
    variant: "chips",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    zone: "50-100M · TWILIGHT ZONE",
    title: "UI/UX Design",
    depth: "75m",
    accentColor: "#9370DB",
    icon: Palette,
    variant: "chips",
    skills: ["Figma", "Wireframing", "Prototyping", "Design Systems", "User Research", "Sprite & Asset Creation"],
  },
  {
    zone: "100-200M · MIDNIGHT ZONE",
    title: "Experience Highlights",
    depth: "150m",
    accentColor: "#8A6FDB",
    icon: Database,
    variant: "list",
    skills: ["Gracewell Client System Deployment", "Hytec Power Inc. Robotics Intern", "13th UMAK IT Skill Olympics: Chef Lakbay Entry", "Smart Queuing System UI/UX Lead"],
  },
  {
    zone: "200-300M · ABYSS ZONE",
    title: "Tools & Workflow",
    depth: "300m",
    accentColor: "#4CAF7D",
    icon: Wrench,
    variant: "chips",
    skills: ["Git", "VS Code", "Vercel", "Render", "Supabase", "Arduino", "GIMP", "Unity"],
  },
];

const depthMarks = [0, 50, 100, 150, 200, 250, 300];

export default function SkillsSection() {
  // const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className="relative isolate px-6 py-24 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              left: `${(i * 11) % 100}%`,
              top: `${(i * 19) % 100}%`,
              background: "rgba(255,255,255,0.16)",
            }}
            animate={{ y: [0, -14, 0], opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-glow-header" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            <span style={{ color: '#FFFFFF' }}>Skills</span> <span style={{ color: 'var(--hero-blue)' }}>&</span> <span style={{ color: '#FFFFFF' }}>Experiences</span>
          </h2>
        </motion.div>

        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-4 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(0,255,255,0.08),transparent_32%)]" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[120px_minmax(0,1fr)]">
            <div className="hidden lg:flex flex-col items-end justify-between pr-4 text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              {depthMarks.map((depth) => (
                <div key={depth} className="h-[72px] flex items-center">{depth}m</div>
              ))}
            </div>

            <div className="relative pl-0 lg:pl-6">
              <div className="hidden md:block absolute left-4 lg:left-0 top-0 bottom-0 w-px bg-cyan-300/60" />

              <div className="grid gap-4 lg:grid-cols-2">
                {skillCategories.map((stop, index) => {
                  const Icon = stop.icon;
                  const accent = stop.accentColor;
                  const isExperience = stop.variant === "list";

                  return (
                    <motion.div
                      key={stop.title}
                      className={`relative rounded-[1.35rem] border overflow-hidden ${isExperience ? "lg:col-span-2" : ""}`}
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        borderColor: `${accent}55`,
                        boxShadow: `0 0 32px ${accent}20, inset 0 0 20px rgba(255,255,255,0.04)`,
                      }}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: accent }} />

                      <div className="p-4 md:p-6 pl-5 md:pl-8">
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
                          <div>
                            <p className="text-[0.7rem] md:text-sm uppercase tracking-[0.25em] mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                              {stop.zone}
                            </p>
                            <h3 className="font-display text-[1.5rem] md:text-3xl leading-tight text-white">{stop.title}</h3>
                          </div>

                          <div className="flex items-center gap-2 rounded-full px-3 py-2 bg-white/10 border border-white/10 text-white self-start">
                            <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: `${accent}22`, color: accent }}>
                              <Icon className="w-4.5 h-4.5" />
                            </span>
                            <div>
                              <p className="text-[0.65rem] uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.65)" }}>
                                Depth
                              </p>
                              <p className="font-medium text-sm md:text-base">{stop.depth}</p>
                            </div>
                          </div>
                        </div>

                        {isExperience ? (
                          <div className="mt-4 space-y-2.5">
                            {stop.skills.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3 rounded-2xl border px-4 py-3"
                                style={{ background: "rgba(255,255,255,0.08)", borderColor: `${accent}33` }}
                              >
                                <span className="mt-1 h-2.5 w-2.5 rounded-full shrink-0" style={{ background: accent }} />
                                <p className="text-sm md:text-[0.95rem] leading-relaxed text-white/90 m-0">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {stop.skills.map((item) => (
                              <span
                                key={item}
                                className="rounded-full px-3 py-2 text-sm text-white border text-center"
                                style={{ background: "rgba(255,255,255,0.12)", borderColor: `${accent}55` }}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}