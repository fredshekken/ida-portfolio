"use client";

import { AnimatePresence, motion } from "framer-motion";
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
    cardBg: "linear-gradient(135deg, #1A6B5A 0%, #0F4A3D 100%)",
    cardBgDark: "linear-gradient(135deg, #1E7A65 0%, #145A48 100%)",
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
    cardBg: "linear-gradient(135deg, #0D5A4A 0%, #083D32 100%)",
    cardBgDark: "linear-gradient(135deg, #0F6A58 0%, #0A4A3C 100%)",
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
    cardBg: "linear-gradient(135deg, #5A2040 0%, #3D1530 100%)",
    cardBgDark: "linear-gradient(135deg, #7A2855 0%, #521A40 100%)",
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
    cardBg: "linear-gradient(135deg, #6B2D1A 0%, #4A1F10 100%)",
    cardBgDark: "linear-gradient(135deg, #8A3820 0%, #6A2A15 100%)",
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
    cardBg: "linear-gradient(135deg, #1A3A6B 0%, #0F2A4A 100%)",
    cardBgDark: "linear-gradient(135deg, #1E4A8A 0%, #143570 100%)",
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
    cardBg: "linear-gradient(135deg, #0D6A7A 0%, #094A57 100%)",
    cardBgDark: "linear-gradient(135deg, #0F7A8A 0%, #0B5A6A 100%)",
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
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const gracewellScreens = [
    { label: "LOG-IN SCREEN" },
    { label: "DASHBOARD" },
    { label: "EMPLOYEE RECORDS" },
    { label: "ATTENDANCE" },
    { label: "SALARY TRACKER" },
  ];

  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      setCols(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

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
      style={{ background: 'transparent' }}
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
                background: isDark ? project.cardBgDark : project.cardBg,
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
                    <button
                      onClick={["gracewell-nexus", "online-seat-reservation", "katseye-fan-page", "smart-queuing", "chef-lakbay", "other-projects"].includes(project.id) ? () => setSelectedProject(project.id) : undefined}
                      className="btn btn-primary relative overflow-hidden flex items-center gap-1 text-[13px] font-medium transition-all shrink-0 whitespace-nowrap"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,255,255,0.18),transparent_36%)]" />
                      <span className="relative z-10 inline-flex items-center gap-1 px-2 py-0.5">
                        <Info className="w-3 h-3" /> About
                      </span>
                    </button>
                  )}
                  {project.hasDemo && (
                    <button
                      className="btn btn-secondary relative overflow-hidden flex items-center gap-1 text-[13px] font-medium transition-all shrink-0 whitespace-nowrap"
                      style={{
                        background: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.42)",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
                        color: "#FFFFFF",
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
                      className="btn btn-secondary relative overflow-hidden flex items-center gap-1 text-[13px] font-medium transition-all shrink-0 whitespace-nowrap"
                      style={{
                        background: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.42)",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
                        color: "#FFFFFF",
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

      <AnimatePresence>
        {selectedProject === "gracewell-nexus" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ 
              background: "rgba(0,0,0,0.85)", 
              backdropFilter: "blur(10px)",
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "900px",
                maxHeight: "90vh",
                borderRadius: "20px",
                background: isDark
                  ? "linear-gradient(135deg, #0A1F3D 0%, #0F2A50 100%)"
                  : "linear-gradient(135deg, #1A6B5A 0%, #0F4A3D 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div style={{
                padding: "20px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#7ECECA", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    WEB DEVELOPMENT
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>
                    Gracewell NEXUS
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#FFFFFF", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "340px 1fr",
                flex: 1,
                overflow: "hidden",
              }}>
                {/* Left panel */}
                <div style={{
                  padding: "20px",
                  overflowY: "auto",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}>
                  {[
                    { label: "ROLE", value: "Lead Developer & Designer" },
                    { label: "PROBLEM", value: "A real HR client needed a centralized system to manage employee records, attendance, and salary processing across multiple roles." },
                    { label: "SOLUTION", value: "Built a full-stack HR web application with role-based access, salary tracking with approval flows, and a collapsible sidebar UI. Deployed on Vercel with a Node.js backend on Render and Supabase as the database." },
                    { label: "TECH STACK", value: "React, Node.js, Express, Supabase, Vercel" },
                  ].map((item) => (
                    <div key={item.label} style={{
                      padding: "12px 14px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}>
                      <p style={{ fontSize: "10px", color: "#7ECECA", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: "13px", color: "#FFFFFF", opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
                        {item.value}
                      </p>
                    </div>
                  ))}

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <button
                      onClick={() => setSelectedProject(null)}
                      style={{
                        padding: "8px 16px", borderRadius: "10px", fontSize: "13px",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#FFFFFF", cursor: "pointer",
                      }}
                    >
                      ← Back
                    </button>
                    <a
                      href="#"
                      style={{
                        padding: "8px 16px", borderRadius: "10px", fontSize: "13px",
                        background: isDark ? "#00C9A7" : "#1A8FA0",
                        color: "#FFFFFF", cursor: "pointer",
                        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px",
                      }}
                    >
                      ↗ Demo
                    </a>
                  </div>
                </div>

                {/* Right panel — carousel */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  gap: "16px",
                }}>
                  {/* Placeholder screen */}
                  <div style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    borderRadius: "12px",
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
                      {gracewellScreens[carouselIndex].label}
                    </p>
                  </div>

                  {/* Carousel controls */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <button
                      onClick={() => setCarouselIndex((prev) => Math.max(0, prev - 1))}
                      disabled={carouselIndex === 0}
                      style={{
                        width: "36px", height: "36px", borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#FFFFFF", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        opacity: carouselIndex === 0 ? 0.3 : 1,
                      }}
                    >
                      ‹
                    </button>
                    <span style={{
                      fontSize: "12px", color: "#7ECECA",
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      minWidth: "160px", textAlign: "center",
                    }}>
                      {gracewellScreens[carouselIndex].label}
                    </span>
                    <button
                      onClick={() => setCarouselIndex((prev) => Math.min(gracewellScreens.length - 1, prev + 1))}
                      disabled={carouselIndex === gracewellScreens.length - 1}
                      style={{
                        width: "36px", height: "36px", borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#FFFFFF", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        opacity: carouselIndex === gracewellScreens.length - 1 ? 0.3 : 1,
                      }}
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {selectedProject === "online-seat-reservation" && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "900px",
                maxHeight: "90vh",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #0D5A4A 0%, #083D32 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div style={{
                padding: "20px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#7ECECA", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    UI/UX DESIGN
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>
                    Online Seat Reservation System
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#FFFFFF", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "340px 1fr",
                flex: 1,
                overflow: "hidden",
              }}>
                {/* Left panel */}
                <div style={{
                  padding: "20px",
                  overflowY: "auto",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}>
                  {[
                    { label: "ROLE", value: "UI/UX Designer" },
                    { label: "PROBLEM", value: "Best Of Luck, a restaurant at Cubao Expo, had no digital reservation system and relied on manual bookings through social media. Note: Side project only. Not directly affiliated with Best of Luck." },
                    { label: "SOLUTION", value: "Designed a Figma UI for a reservation system with a distinctive deep forest green and matte crimson theme, mahjong tile-styled time slot chips, and a Lucky Ticket confirmation screen." },
                    { label: "TECH STACK", value: "Figma" },
                  ].map((item) => (
                    <div key={item.label} style={{
                      padding: "12px 14px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}>
                      <p style={{ fontSize: "10px", color: "#7ECECA", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: "13px", color: "#FFFFFF", opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
                        {item.value}
                      </p>
                    </div>
                  ))}

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <button
                      onClick={() => setSelectedProject(null)}
                      style={{
                        padding: "8px 16px", borderRadius: "10px", fontSize: "13px",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#FFFFFF", cursor: "pointer",
                      }}
                    >
                      ← Back
                    </button>
                    <a
                      href="#"
                      style={{
                        padding: "8px 16px", borderRadius: "10px", fontSize: "13px",
                        background: "#1A8FA0",
                        color: "#FFFFFF", cursor: "pointer",
                        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px",
                      }}
                    >
                      ↗ Demo
                    </a>
                  </div>
                </div>

                {/* Right panel — screenshot grid placeholder */}
                <div style={{
                  padding: "20px",
                  overflowY: "auto",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  alignContent: "start",
                }}>
                  {["LANDING PAGE", "RESERVATION FLOW", "TIME SLOT PICKER", "LUCKY TICKET", "FAQ", "CONFIRMATION"].map((label) => (
                    <div
                      key={label}
                      style={{
                        aspectRatio: "9/16",
                        borderRadius: "12px",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", textAlign: "center", padding: "8px" }}>
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {selectedProject === "katseye-fan-page" && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: "900px", maxHeight: "90vh",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #5A2040 0%, #3D1530 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#E85D8A", textTransform: "uppercase", letterSpacing: "0.1em" }}>UI/UX DESIGN</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>KATSEYE Fan Page / Blog</span>
                </div>
                <button onClick={() => setSelectedProject(null)} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>✕</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", flex: 1, overflow: "hidden" }}>
                <div style={{ padding: "20px", overflowY: "auto", borderRight: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { label: "ROLE", value: "UI/UX Designer" },
                    { label: "PROBLEM", value: "KATSEYE had just debuted in 2024 with no established fan site that matched the energy and aesthetic of the group." },
                    { label: "SOLUTION", value: "Designed an initial fan page concept in Figma with a sleek modern layout, capturing the visual identity of the group through typography and color choices." },
                    { label: "TECH STACK", value: "Figma" },
                  ].map((item) => (
                    <div key={item.label} style={{ padding: "12px 14px", borderRadius: "12px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <p style={{ fontSize: "10px", color: "#E85D8A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>{item.label}</p>
                      <p style={{ fontSize: "13px", color: "#FFFFFF", opacity: 0.9, lineHeight: 1.6, margin: 0 }}>{item.value}</p>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <button onClick={() => setSelectedProject(null)} style={{ padding: "8px 16px", borderRadius: "10px", fontSize: "13px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", cursor: "pointer" }}>← Back</button>
                    <a href="#" style={{ padding: "8px 16px", borderRadius: "10px", fontSize: "13px", background: "#E85D8A", color: "#FFFFFF", cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>↗ Demo</a>
                  </div>
                </div>

                <div style={{ padding: "20px", overflowY: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignContent: "start" }}>
                  {["HOME PAGE", "ABOUT PAGE", "RELEASES", "EVENTS", "ARTICLES", "MEMBER PROFILE"].map((label) => (
                    <div key={label} style={{ aspectRatio: "16/9", borderRadius: "12px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", textAlign: "center", padding: "8px" }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {selectedProject === "smart-queuing" && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: "900px", maxHeight: "90vh",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #6B2D1A 0%, #4A1F10 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#E8845D", textTransform: "uppercase", letterSpacing: "0.1em" }}>UI/UX DESIGN</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Smart Queueing System</span>
                </div>
                <button onClick={() => setSelectedProject(null)} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>✕</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", flex: 1, overflow: "hidden" }}>
                <div style={{ padding: "20px", overflowY: "auto", borderRight: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { label: "ROLE", value: "UI/UX Lead of a Team with 8 Members" },
                    { label: "PROBLEM", value: "Students and staff across multiple institutions had no efficient way to manage queueing for services, causing long wait times and poor user experience." },
                    { label: "SOLUTION", value: "Designed a comprehensive Figma prototype covering the full queuing flow, from ticket generation to service completion, with a clean design system built for accessibility and multi-institute use." },
                    { label: "TECH STACK", value: "Figma" },
                  ].map((item) => (
                    <div key={item.label} style={{ padding: "12px 14px", borderRadius: "12px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <p style={{ fontSize: "10px", color: "#E8845D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>{item.label}</p>
                      <p style={{ fontSize: "13px", color: "#FFFFFF", opacity: 0.9, lineHeight: 1.6, margin: 0 }}>{item.value}</p>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <button onClick={() => setSelectedProject(null)} style={{ padding: "8px 16px", borderRadius: "10px", fontSize: "13px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", cursor: "pointer" }}>← Back</button>
                    <a href="#" style={{ padding: "8px 16px", borderRadius: "10px", fontSize: "13px", background: "#E8845D", color: "#FFFFFF", cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>↗ Demo</a>
                  </div>
                </div>

                <div style={{ padding: "20px", overflowY: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignContent: "start" }}>
                  {["SPLASH SCREEN", "MAIN MENU", "QUEUE TICKET", "SERVICE FLOW", "CHATBOT (AIVIN)", "FORM SCREEN"].map((label) => (
                    <div key={label} style={{ aspectRatio: "9/16", borderRadius: "12px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", textAlign: "center", padding: "8px" }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {selectedProject === "chef-lakbay" && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: "900px", maxHeight: "90vh",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #1A3A6B 0%, #0F2A4A 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#5D9AE8", textTransform: "uppercase", letterSpacing: "0.1em" }}>GRAPHIC DESIGN & ASSET MANAGEMENT</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Chef Lakbay</span>
                </div>
                <button onClick={() => setSelectedProject(null)} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>✕</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", flex: 1, overflow: "hidden" }}>
                <div style={{ padding: "20px", overflowY: "auto", borderRight: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { label: "ROLE", value: "Asset Creation and Scene Management" },
                    { label: "PROBLEM", value: "The team needed a fully playable Android game for the IT Skills Olympics 2024 within a tight competition timeline." },
                    { label: "SOLUTION", value: "Contributed game assets and managed scene flow in Unity for a culinary adventure game set across Philippine destinations, helping the team deliver a complete and polished game entry." },
                    { label: "TECH STACK", value: "Unity, GIMP" },
                  ].map((item) => (
                    <div key={item.label} style={{ padding: "12px 14px", borderRadius: "12px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <p style={{ fontSize: "10px", color: "#5D9AE8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>{item.label}</p>
                      <p style={{ fontSize: "13px", color: "#FFFFFF", opacity: 0.9, lineHeight: 1.6, margin: 0 }}>{item.value}</p>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <button onClick={() => setSelectedProject(null)} style={{ padding: "8px 16px", borderRadius: "10px", fontSize: "13px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", cursor: "pointer" }}>← Back</button>
                    <a href="#" style={{ padding: "8px 16px", borderRadius: "10px", fontSize: "13px", background: "#5D9AE8", color: "#FFFFFF", cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>↗ Code</a>
                  </div>
                </div>

                <div style={{ padding: "20px", overflowY: "auto" }}>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Game Assets</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} style={{ aspectRatio: "1", borderRadius: "8px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "9px" }}>asset</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {selectedProject === "other-projects" && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: "900px", maxHeight: "90vh",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #0D6A7A 0%, #094A57 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#4FC3D4", textTransform: "uppercase", letterSpacing: "0.1em" }}>GRAPHIC DESIGN</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Other Projects</span>
                </div>
                <button onClick={() => setSelectedProject(null)} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>✕</button>
              </div>

              <div style={{ padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                  These are projects I have made together with other designers.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                  {[
                    { title: "BEST-e", description: "Event booking platform UI", label: "PLACEHOLDER" },
                    { title: "Museum Interactive", description: "Interactive museum experience UI", label: "PLACEHOLDER" },
                    { title: "Planva", description: "Lifestyle blueprint app UI", label: "PLACEHOLDER" },
                  ].map((project) => (
                    <div key={project.title} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ aspectRatio: "16/10", borderRadius: "12px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>{project.label}</p>
                      </div>
                      <p style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 600, margin: 0 }}>{project.title}</p>
                      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0 }}>{project.description}</p>
                      <a href="#" style={{ padding: "6px 14px", borderRadius: "8px", fontSize: "12px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", width: "fit-content" }}>↗ Demo</a>
                    </div>
                  ))}
                </div>

                <button onClick={() => setSelectedProject(null)} style={{ padding: "8px 16px", borderRadius: "10px", fontSize: "13px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", cursor: "pointer", width: "fit-content", marginTop: "8px" }}>← Back</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}