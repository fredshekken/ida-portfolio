"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Globe, Palette, Gamepad2, Layers, FolderOpen, Info, ExternalLink, Code } from "lucide-react";
import { useState, useEffect } from "react";
import type { ElementType } from "react";

const projects = [
  {
    id: "gracewell-nexus",
    title: "Gracewell NEXUS",
    category: "WEB DEVELOPMENT",
    tech: ["React", "CSS", "JavaScript", "Vercel"],
    cardBg: "linear-gradient(135deg, rgba(6,156,144,0.95) 0%, rgba(3,110,99,0.95) 100%)",
    iconBg: "#074F4A",
    accentColor: "#00BFA6",
    icon: Globe,
    background: "kelp-forest",
    hasDemo: true,
    hasCode: false,
    hasAbout: true,
  },
  {
    id: "online-seat-reservation",
    title: "Online Seat Reservation System",
    category: "UI/UX DESIGN",
    tech: ["Figma"],
    cardBg: "linear-gradient(135deg, rgba(13,90,74,0.95) 0%, rgba(8,61,50,0.95) 100%)",
    iconBg: "#062D25",
    accentColor: "#4FC3A1",
    icon: Palette,
    background: "jellyfish",
    hasDemo: true,
    hasCode: false,
    hasAbout: true,
  },
  {
    id: "katseye-fan-page",
    title: "KATSEYE Fan Page / Blog",
    category: "UI/UX DESIGN",
    tech: ["Figma"],
    cardBg: "linear-gradient(135deg, rgba(90,32,64,0.95) 0%, rgba(61,21,48,0.95) 100%)",
    iconBg: "#2D0F22",
    accentColor: "#E85D8A",
    icon: Palette,
    background: "cave",
    hasDemo: true,
    hasCode: false,
    hasAbout: true,
  },
  {
    id: "smart-queuing",
    title: "Smart Queueing System",
    category: "UI/UX DESIGN",
    tech: ["Figma"],
    cardBg: "linear-gradient(135deg, rgba(107,45,26,0.95) 0%, rgba(74,31,16,0.95) 100%)",
    iconBg: "#3A1508",
    accentColor: "#E8845D",
    icon: Layers,
    background: "coral-reef",
    hasDemo: true,
    hasCode: false,
    hasAbout: true,
  },
  {
    id: "chef-lakbay",
    title: "Chef Lakbay",
    category: "GRAPHIC DESIGN & ASSET MANAGEMENT",
    tech: ["GIMP", "Canva", "Unity"],
    cardBg: "linear-gradient(135deg, rgba(26,58,107,0.95) 0%, rgba(15,42,74,0.95) 100%)",
    iconBg: "#0A1F3A",
    accentColor: "#5D9AE8",
    icon: Gamepad2,
    background: "submarine",
    hasDemo: false,
    hasCode: true,
    hasAbout: true,
  },
  {
    id: "other-projects",
    title: "Other Projects",
    category: "GRAPHIC DESIGN",
    tech: ["Figma", "Canva"],
    cardBg: "linear-gradient(135deg, rgba(13,106,122,0.95) 0%, rgba(9,74,87,0.95) 100%)",
    iconBg: "#063540",
    accentColor: "#4FC3D4",
    icon: FolderOpen,
    background: "bioluminescent",
    hasDemo: false,
    hasCode: false,
    hasAbout: true,
  },
];

const ProjectIcon = ({ color, bg, Icon }: { color: string; bg: string; Icon: ElementType }) => (
  <div
    className="w-16 h-16 rounded-full flex items-center justify-center relative border-4"
    style={{
      background: bg,
      borderColor: color,
      boxShadow: `0 0 20px ${color}60, inset 0 0 15px rgba(0,0,0,0.3)`,
    }}
  >
    <Icon className="w-7 h-7" style={{ color: color }} />
  </div>
);

const ZoneBackground = ({ theme, isDark }: { theme: string; isDark: boolean }) => {
  const backgrounds: Record<string, JSX.Element> = {
    "coral-reef": (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 rounded-t-full"
            style={{
              width: `${20 + i * 8}px`,
              height: `${40 + i * 15}px`,
              background: `linear-gradient(180deg, ${isDark ? "#FF7F50" : "#FF6347"} 0%, transparent 100%)`,
              left: `${i * 20}%`,
            }}
            animate={{ scaleY: [1, 1.1, 1] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`fish-${i}`}
            className="absolute w-3 h-2 rounded-full opacity-40"
            style={{
              background: isDark ? "#FFB6C1" : "#FFA07A",
              top: `${20 + i * 20}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>
    ),
    jellyfish: (
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Waves layer - horizontal moving waves to read clearly on-card */}
        {[...Array(3)].map((_, w) => (
          <motion.div
            key={w}
            className="absolute left-0 right-0 rounded-full"
            style={{
              height: `${24 + w * 10}px`,
              bottom: `${6 + w * 18}%`,
              background: `linear-gradient(90deg, rgba(255,255,255,${0.01 + w * 0.02}) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,${0.01 + w * 0.02}) 100%)`,
              filter: "blur(8px)",
            }}
            animate={{ x: [ -40 - w * 20, 40 + w * 20, -40 - w * 20 ], opacity: [0.12 + w * 0.06, 0.28 + w * 0.08, 0.12 + w * 0.06] }}
            transition={{ duration: 6 + w * 2, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Floating glows for jellyfish feel */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`jglow-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${8 + (i % 3) * 6}px`,
              height: `${8 + (i % 3) * 6}px`,
              left: `${(i * 17) % 100}%`,
              top: `${10 + (i * 13) % 70}%`,
              background: isDark ? "#CDA8FF" : "#D9B3FF",
              mixBlendMode: "screen",
              opacity: 0.6,
            }}
            animate={{ y: [0, -24 - (i % 3) * 12, 0], opacity: [0.3, 0.9, 0.3], scale: [1, 1.18, 1] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}
      </div>
    ),
    cave: (
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.08) 0%, transparent 28%), linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.12) 100%)",
            backgroundSize: "100% 100%",
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-lg"
              style={{
                width: `${30 + i * 10}px`,
                height: `${60 + i * 20}px`,
                background: `linear-gradient(135deg, ${isDark ? "#8B5A2B" : "#654321"} 0%, transparent 100%)`,
                left: `${i * 15}%`,
                top: `${i * 10}%`,
                transform: "rotate(-15deg)",
              }}
              animate={{ y: [0, -6, 0], opacity: [0.55, 0.85, 0.55] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`crack-${i}`}
            className="absolute w-0.5 rounded-full"
            style={{
              height: `${40 + i * 20}px`,
              background: `linear-gradient(180deg, ${isDark ? "#FFD700" : "#FFA500"} 0%, transparent 100%)`,
              left: `${20 + i * 30}%`,
              top: `${i * 25}%`,
              boxShadow: `0 0 10px ${isDark ? "#FFD700" : "#FFA500"}`,
            }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2 + i, repeat: Infinity }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${3 + (i % 2)}px`,
              height: `${3 + (i % 2)}px`,
              left: `${12 + i * 16}%`,
              top: `${18 + (i % 3) * 18}%`,
              background: isDark ? "#FFD700" : "#FFA500",
              boxShadow: `0 0 8px ${isDark ? "#FFD700" : "#FFA500"}`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    ),
    "kelp-forest": (
      <div className="absolute inset-0 overflow-hidden opacity-25">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-2 rounded-t-full origin-bottom"
            style={{
              height: `${80 + i * 20}%`,
              background: `linear-gradient(180deg, ${isDark ? "#32CD32" : "#228B22"} 0%, ${isDark ? "#2E8B57" : "#006400"} 100%)`,
              left: `${i * 12}%`,
            }}
            animate={{
              rotateZ: [-3, 3, -3],
              scaleY: [1, 1.05, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    ),
    submarine: (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 55%, rgba(0, 201, 167, 0.05) 100%)",
          }}
          animate={{ backgroundPositionY: ["0%", "100%", "0%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(3)].map((_, i) => (
          <div
            key={`porthole-${i}`}
            className="absolute rounded-full border-4"
            style={{
              width: "40px",
              height: "40px",
              borderColor: isDark ? "#4682B4" : "#5F9EA0",
              top: `${20 + i * 30}%`,
              right: `${10 + i * 15}%`,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${isDark ? "rgba(70, 130, 180, 0.55)" : "rgba(95, 158, 160, 0.45)"} 0%, transparent 70%)`,
              }}
              animate={{ opacity: [0.35, 0.85, 0.35], scale: [1, 1.08, 1] }}
              transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, ${isDark ? "rgba(70, 130, 180, 0.3)" : "rgba(95, 158, 160, 0.3)"} 0%, transparent 70%)`,
              }}
            />
          </div>
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`pipe-${i}`}
            className="absolute h-1 rounded-full"
            style={{
              width: `${50 + i * 20}px`,
              background: isDark ? "#708090" : "#778899",
              top: `${15 + i * 20}%`,
              left: `${i * 10}%`,
            }}
            animate={{ opacity: [0.35, 0.8, 0.35], x: [0, 8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 2) * 2}px`,
              height: `${4 + (i % 2) * 2}px`,
              left: `${18 + i * 14}%`,
              bottom: `${10 + (i % 3) * 8}%`,
              background: isDark ? "rgba(120, 190, 255, 0.7)" : "rgba(140, 220, 220, 0.7)",
              boxShadow: `0 0 8px ${isDark ? "rgba(120, 190, 255, 0.7)" : "rgba(140, 220, 220, 0.7)"}`,
            }}
            animate={{ y: [-10, -80, -10], opacity: [0, 0.9, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
        ))}
      </div>
    ),
    bioluminescent: (
      <motion.div
        className="absolute inset-0 overflow-hidden opacity-40"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              background: isDark ? "#00FFFF" : "#00CED1",
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
              boxShadow: `0 0 ${4 + (i % 4) * 2}px ${isDark ? "#00FFFF" : "#00CED1"}`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
              x: [0, i % 2 === 0 ? 8 : -8, 0],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 2.5 + (i % 5) * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              left: `${10 + i * 20}%`,
              top: `${8 + i * 18}%`,
              background: `radial-gradient(circle, ${isDark ? "rgba(0, 255, 255, 0.18)" : "rgba(0, 206, 209, 0.16)"} 0%, transparent 68%)`,
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    ),
  };
  return backgrounds[theme] || null;
};

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cols, setCols] = useState<number>(3);

  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      setCols(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const computeOffset = (index: number) => {
    if (hoveredIndex === null) return { x: 0, y: 0 };
    const c = Math.max(1, cols);
    const row = Math.floor(index / c);
    const col = index % c;
    const hRow = Math.floor(hoveredIndex / c);
    const hCol = hoveredIndex % c;
    const dx = col - hCol;
    const dy = row - hRow;
    const distance = Math.hypot(dx, dy);
    if (distance === 0) return { x: 0, y: 0 };
    const normX = dx / distance;
    const normY = dy / distance;
    const maxDist = 2.5; // influence radius (reduced)
    const strength = Math.max(0, 1 - distance / maxDist);
    const maxX = 8; // horizontal push (reduced)
    const maxY = 6; // vertical push (reduced)
    return { x: normX * strength * maxX, y: normY * strength * maxY };
  };

  return (
    <section
      id="projects"
      className="relative isolate w-full px-6 py-24 overflow-hidden"
      style={{
        background: "transparent",
      }}
    >
      {/* Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              left: `${5 + i * 8}%`,
              bottom: "-20px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
            animate={{ y: [0, -800], opacity: [0, 0.55, 0] }}
            transition={{
              duration: 8 + i * 1.2,
              repeat: Infinity,
              delay: i * 0.9,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display font-bold mb-3 text-glow-header"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            <span style={{ color: '#FFFFFF' }}>My</span> <span style={{ color: 'var(--hero-blue)' }}>Projects</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const offset = computeOffset(index);
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={offset}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              whileHover={{
                y: -10,
                scale: 1.035,
                rotate: -1.5,
                boxShadow:
                  "0 36px 120px rgba(0,255,220,0.22), 0 0 48px rgba(255,255,255,0.5), inset 0 0 28px rgba(255,255,255,0.06)",
              }}
              className="rounded-2xl p-6 cursor-pointer relative overflow-hidden flex flex-col justify-between"
              style={{
                background: project.cardBg,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <ZoneBackground theme={project.background} isDark={isDark} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4">
                  <ProjectIcon color={project.accentColor} bg={project.iconBg} Icon={project.icon} />
                </div>

                {/* Category */}
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="font-bold text-lg mb-4 text-white leading-tight">
                  {project.title}
                </h3>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full text-white"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-nowrap gap-1">
                  {project.hasAbout && (
                    <button className="btn btn-primary relative overflow-hidden flex items-center gap-1 text-[11px] font-medium transition-all shrink-0 whitespace-nowrap">
                      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,255,255,0.18),transparent_36%)]" />
                      <span className="relative z-10 inline-flex items-center gap-1 px-2 py-0.5">
                        <Info className="w-3 h-3" /> About
                      </span>
                    </button>
                  )}
                  {project.hasDemo && (
                    <button
                      className="btn btn-secondary relative overflow-hidden flex items-center gap-1 text-[11px] font-medium transition-all shrink-0 whitespace-nowrap"
                      style={{
                        background: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.42)",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
                      }}
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,255,255,0.24),transparent_32%)]" />
                      <span className="relative z-10 inline-flex items-center gap-1 px-2 py-0.5">
                        <ExternalLink className="w-3 h-3" /> Demo
                      </span>
                    </button>
                  )}
                  {project.hasCode && (
                    <button
                      className="btn btn-secondary relative overflow-hidden flex items-center gap-1 text-[11px] font-medium transition-all shrink-0 whitespace-nowrap"
                      style={{
                        background: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.42)",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
                      }}
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,255,255,0.24),transparent_32%)]" />
                      <span className="relative z-10 inline-flex items-center gap-1 px-2 py-0.5">
                        <Code className="w-3 h-3" /> Code
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}