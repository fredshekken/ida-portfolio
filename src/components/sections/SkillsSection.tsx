"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Database, Wrench, Compass, Anchor } from "lucide-react";

const meterStops = [
  {
    depth: "0m",
    range: "0-50m · sunlight zone",
    title: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: Code2,
  },
  {
    depth: "75m",
    range: "50-100m · twilight zone",
    title: "UI/UX Design",
    items: ["Figma", "Prototyping", "Design Systems", "Visual Hierarchy"],
    icon: Palette,
  },
  {
    depth: "150m",
    range: "100-200m · midnight zone",
    title: "Experience Highlights",
    items: ["Gracewell Nexus", "Robotics Internship", "Client Collaboration", "Deployment"],
    icon: Database,
  },
  {
    depth: "300m",
    range: "200-300m · abyss zone",
    title: "Tools & Workflow",
    items: ["Git", "VS Code", "Vercel", "Motion/Framer"],
    icon: Wrench,
  },
];

const depthMarks = [0, 50, 100, 150, 200, 250, 300];

export default function SkillsSection() {
  // const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className="relative isolate px-6 py-24 overflow-hidden"
      style={{
        background: "transparent",
      }}
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

        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(0,255,255,0.08),transparent_32%)]" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[120px_minmax(0,1fr)]">
            <div className="hidden lg:flex flex-col items-end justify-between pr-4 text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              {depthMarks.map((depth) => (
                <div key={depth} className="h-[72px] flex items-center">{depth}m</div>
              ))}
            </div>

            <div className="relative pl-0 lg:pl-6">
              <div className="absolute left-4 lg:left-0 top-0 bottom-0 w-px bg-cyan-300/60" />

              <div className="flex flex-col gap-4">
                {meterStops.map((stop, index) => {
                  const Icon = stop.icon;
                  const accent = ["#7FE3D8", "#55D6FF", "#BDA7FF", "#7EE6B8"][index];

                  return (
                    <motion.div
                      key={stop.title}
                      className="relative rounded-[1.5rem] border overflow-hidden"
                      style={{
                        marginLeft: `${index * 10}px`,
                        background: "rgba(255,255,255,0.08)",
                        borderColor: `${accent}55`,
                        boxShadow: `0 0 32px ${accent}20, inset 0 0 20px rgba(255,255,255,0.04)`,
                      }}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 8, scale: 1.01 }}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: accent }} />

                      <div className="p-5 md:p-6 pl-6 md:pl-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div>
                            <p className="text-sm uppercase tracking-[0.25em] mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                              {stop.range}
                            </p>
                            <h3 className="font-display text-2xl md:text-3xl text-white">{stop.title}</h3>
                          </div>

                          <div className="flex items-center gap-3 rounded-full px-4 py-2 bg-white/10 border border-white/10 text-white">
                            <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${accent}22`, color: accent }}>
                              <Icon className="w-5 h-5" />
                            </span>
                            <div>
                              <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.65)" }}>
                                Depth
                              </p>
                              <p className="font-medium">{stop.depth}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {stop.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full px-3 py-1.5 text-sm text-white border"
                              style={{ background: "rgba(255,255,255,0.12)", borderColor: `${accent}55` }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <Compass className="w-4 h-4" />
                <span>Dummy data for layout exploration. We can swap this with real history later.</span>
                <Anchor className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}