"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Database, Globe, Wrench, Zap } from "lucide-react";
import WaveDivider from "@/components/ui/WaveDivider";
import { useTheme } from "@/context/ThemeContext";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    zone: "Shallow Reef Zone",
    theme: "coral",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Motion/Framer"],
    background: "coral-reef",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    zone: "Jellyfish Zone",
    theme: "jellyfish",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research"],
    background: "jellyfish",
  },
  {
    icon: Database,
    title: "Backend & Database",
    zone: "Deep Cave Zone",
    theme: "cave",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    background: "cave",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    zone: "Kelp Forest Zone",
    theme: "kelp",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "PWA"],
    background: "kelp-forest",
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    zone: "Submarine Zone",
    theme: "submarine",
    skills: ["Git", "GitHub", "VS Code", "npm/pnpm", "Vite"],
    background: "submarine",
  },
  {
    icon: Zap,
    title: "Other Skills",
    zone: "Bioluminescent Zone",
    theme: "bio",
    skills: ["Python", "Java", "C++", "Problem Solving", "Team Collaboration"],
    background: "bioluminescent",
  },
];

const getZoneColors = (theme: string, isDark: boolean) => {
  const themes: Record<string, { light: string; dark: string; accent: string; glow: string }> = {
    coral: {
      light: "rgba(255, 127, 80, 0.35)",
      dark: "rgba(255, 127, 80, 0.1)",
      accent: isDark ? "#FF7F50" : "#FF6347",
      glow: "rgba(255, 127, 80, 0.3)",
    },
    jellyfish: {
      light: "rgba(147, 112, 219, 0.35)",
      dark: "rgba(147, 112, 219, 0.1)",
      accent: isDark ? "#9370DB" : "#8A2BE2",
      glow: "rgba(147, 112, 219, 0.3)",
    },
    cave: {
      light: "rgba(139, 90, 43, 0.35)",
      dark: "rgba(139, 90, 43, 0.1)",
      accent: isDark ? "#D4A574" : "#8B5A2B",
      glow: "rgba(212, 165, 116, 0.3)",
    },
    kelp: {
      light: "rgba(34, 139, 34, 0.35)",
      dark: "rgba(34, 139, 34, 0.1)",
      accent: isDark ? "#32CD32" : "#228B22",
      glow: "rgba(50, 205, 50, 0.3)",
    },
    submarine: {
      light: "rgba(70, 130, 180, 0.35)",
      dark: "rgba(70, 130, 180, 0.1)",
      accent: isDark ? "#4682B4" : "#5F9EA0",
      glow: "rgba(70, 130, 180, 0.3)",
    },
    bio: {
      light: "rgba(0, 255, 255, 0.35)",
      dark: "rgba(0, 255, 255, 0.1)",
      accent: isDark ? "#00FFFF" : "#00CED1",
      glow: "rgba(0, 255, 255, 0.3)",
    },
  };
  return themes[theme];
};

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
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${i * 25}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="w-12 h-12 rounded-full blur-sm"
              style={{
                background: `radial-gradient(circle, ${isDark ? "#9370DB" : "#8A2BE2"} 0%, transparent 70%)`,
              }}
            />
            {[...Array(3)].map((_, j) => (
              <div
                key={j}
                className="w-px absolute top-12 opacity-40"
                style={{
                  height: `${15 + j * 5}px`,
                  background: isDark ? "#9370DB" : "#8A2BE2",
                  left: `${j * 6}px`,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>
    ),
    cave: (
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
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
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, ${isDark ? "rgba(70, 130, 180, 0.3)" : "rgba(95, 158, 160, 0.3)"} 0%, transparent 70%)`,
              }}
            />
          </div>
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`pipe-${i}`}
            className="absolute h-1 rounded-full"
            style={{
              width: `${50 + i * 20}px`,
              background: isDark ? "#708090" : "#778899",
              top: `${15 + i * 20}%`,
              left: `${i * 10}%`,
            }}
          />
        ))}
      </div>
    ),
    bioluminescent: (
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: isDark ? "#00FFFF" : "#00CED1",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${4 + Math.random() * 8}px ${isDark ? "#00FFFF" : "#00CED1"}`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    ),
  };
  return backgrounds[theme] || null;
};

export default function SkillsSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{
        marginTop: "-2px",
        background: isDark
          ? "linear-gradient(180deg, #0D3B6E 0%, #0A1F3D 50%, #050D1A 100%)"
          : "linear-gradient(180deg, #0D3B6E 0%, #0A5B7A 50%, #0D3B6E 100%)",
      }}
    >
      {/* Deep water pressure effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px rounded-full"
            style={{
              height: `${10 + Math.random() * 30}px`,
              background: isDark ? "rgba(0, 201, 167, 0.3)" : "rgba(255, 255, 255, 0.4)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#FFFFFF",
            }}
          >
            Ocean Creature Zones
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: "#B8E4F9" }}>
            Skills organized by their natural habitats in the deep
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getZoneColors(category.theme, isDark);
            return (
              <motion.div
                key={index}
                className="relative rounded-2xl p-6 backdrop-blur-xl overflow-hidden"
                style={{
                  background: isDark ? colors.dark : colors.light,
                  border: `1px solid ${colors.accent}40`,
                  boxShadow: `0 0 30px ${colors.glow}`,
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Zone Background */}
                <ZoneBackground theme={category.background} isDark={isDark} />

                {/* Content - overlaid on background */}
                <div className="relative z-10">
                  {/* Porthole-style icon container */}
                  <motion.div
                    className="mb-4 inline-block p-4 rounded-full border-4 relative"
                    style={{
                      background: isDark
                        ? "rgba(10, 31, 61, 0.8)"
                        : "rgba(13, 59, 110, 0.6)",
                      borderColor: colors.accent,
                      boxShadow: `inset 0 0 20px ${colors.glow}, 0 0 20px ${colors.glow}`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <category.icon
                      className="w-6 h-6"
                      style={{
                        color: colors.accent,
                      }}
                    />
                    {/* Porthole screws */}
                    {[0, 90, 180, 270].map((deg) => (
                      <div
                        key={deg}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{
                          background: colors.accent,
                          transform: `rotate(${deg}deg) translateY(-24px)`,
                          top: "50%",
                          left: "50%",
                        }}
                      />
                    ))}
                  </motion.div>

                  <div
                    className="mb-1 text-xs tracking-wider uppercase"
                    style={{
                      opacity: isDark ? 0.6 : 0.8,
                      color: "#B8E4F9",
                    }}
                  >
                    {category.zone}
                  </div>
                  <h3 className="mb-4" style={{ color: "#FFFFFF" }}>
                    {category.title}
                  </h3>

                  {/* Sea glass skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-sm backdrop-blur-md"
                        style={{
                          background: isDark
                            ? "rgba(255, 255, 255, 0.15)"
                            : "rgba(126, 206, 202, 0.3)",
                          border: isDark
                            ? "1px solid rgba(255, 255, 255, 0.3)"
                            : "2px solid #1A8FA0",
                          boxShadow:
                            "0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                          color: "#FFFFFF",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          background: "rgba(255, 255, 255, 0.25)",
                          boxShadow:
                            "0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <WaveDivider fillColor={isDark ? "#050D1A" : "#0D3B6E"} />
    </section>
  );
}
