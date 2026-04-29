"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Figma, FileText } from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";
import WaveDivider from "@/components/ui/WaveDivider";
import { useTheme } from "@/context/ThemeContext";

interface Project {
  title: string;
  description: string;
  denomination: string;
  tech: string[];
  image: string;
  role?: string;
  problem?: string;
  solution?: string;
  note?: string;
  isFigmaProject?: boolean;
  isDocsProject?: boolean;
}

const projects: Project[] = [
  {
    title: "Gracewell NEXUS",
    denomination: "Web App",
    description: "Interactive data visualization platform for marine biology research.",
    tech: ["React", "Three.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    role: "Lead Developer & Designer",
    problem: "Marine researchers needed a unified platform to visualize complex oceanographic data in real-time.",
    solution: "Built an interactive 3D dashboard with live sensor integration and intuitive data filtering.",
  },
  {
    title: "Wave Rider E-Commerce",
    denomination: "Full-Stack",
    description: "Full-stack surfing equipment marketplace with real-time inventory and payments.",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=300&fit=crop",
    role: "Full-Stack Developer",
    problem: "Local surf shop needed an online presence with secure payments and inventory management.",
    solution: "Developed a modern e-commerce platform with Stripe integration and real-time stock tracking.",
  },
  {
    title: "Best Of Luck Reservation System",
    denomination: "UI/UX",
    description: "Figma UI Design · Reservation System",
    tech: ["Figma", "Prototyping", "Design Systems"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    role: "UI/UX Designer",
    problem: "Restaurants needed an intuitive digital reservation system.",
    solution: "Designed a warm, elegant interface with real-time availability and automated confirmations.",
    note: "Personal Project",
    isFigmaProject: true,
  },
  {
    title: "SeaStack",
    denomination: "Compiler Design",
    description: "Custom compiler with Python backend and Google Sheets integration.",
    tech: ["Compiler Design", "Python", "Google Sheets"],
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop",
    role: "Compiler Developer",
    problem: "Needed a custom language compiler with spreadsheet-based data visualization.",
    solution: "Built a complete compiler toolchain with lexer, parser, and Google Sheets API integration.",
    isDocsProject: true,
  },
  {
    title: "Chef Lakbay",
    denomination: "Game Dev",
    description: "Immersive cooking adventure with Filipino culinary themes.",
    tech: ["Unity", "C#", "Game Design", "3D Modeling"],
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=400&h=300&fit=crop",
    role: "Asset Creation & Scene Management",
    problem: "Players wanted an engaging way to explore Filipino cuisine through gameplay.",
    solution: "Created an adventure game combining cooking mechanics with cultural education.",
  },
  {
    title: "ADOBOT",
    denomination: "Mobile Dev",
    description: "AI-powered cooking assistant for Filipino recipes.",
    tech: ["React Native", "Firebase", "OpenAI API", "Cloud Functions"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop",
    role: "Mobile Developer & Designer",
    problem: "Home cooks needed personalized Filipino recipe recommendations.",
    solution: "Developed an AI chatbot app that suggests recipes and manages shopping lists.",
  },
  {
    title: "KATSEYE Fan Page",
    denomination: "UI/UX",
    description: "Figma UI Concept · Unofficial Fan Page",
    tech: ["Figma", "Prototyping", "Visual Design"],
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop",
    role: "UI/UX Designer",
    problem: "K-pop fans wanted a modern platform to celebrate their favorite group.",
    solution: "Designed a sleek fan page with dark aesthetics and interactive galleries.",
    note: "Personal Project · 2024",
    isFigmaProject: true,
  },
  {
    title: "Smart Multi-Institute Queuing System",
    denomination: "UI/UX",
    description: "Figma Prototype · Team of 8",
    tech: ["Figma", "User Research", "Design Systems", "Prototyping"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    role: "UI/UX Lead",
    problem: "Multiple institutions needed a unified queuing system to reduce wait times.",
    solution: "Led design of a queuing platform with real-time tracking and analytics.",
    note: "UI/UX Lead",
    isFigmaProject: true,
  },
];

/* ── dimensions ─────────────────────────────────────────────────── */
const HULL_H = 290;
const BOW_W = 190;
const HULL_W = 730;
const STERN_W = 120;
const PROP_SIZE = 90;

// Conning tower dims
const TOWER_W = 128;
const TOWER_H = 68;
const MAST_H = 106; // antennas + mast above tower
const ABOVE_HULL = TOWER_H + MAST_H; // space above hull for tower

// Porthole
const PORT_D = 162;

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const VISIBLE = 3;
  const maxIndex = projects.length - VISIBLE;

  const scroll = (dir: "left" | "right") => {
    if (dir === "left" && currentIndex > 0) setCurrentIndex((p) => p - 1);
    if (dir === "right" && currentIndex < maxIndex) setCurrentIndex((p) => p + 1);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + VISIBLE);

  /* ── palette ── */
  const hullGrad = isDark
    ? "linear-gradient(180deg,#2E5F8A 0%,#1C3F6A 42%,#122D52 100%)"
    : "linear-gradient(180deg,#4A82B8 0%,#2F6096 42%,#1E4872 100%)";
  const hullBorder = isDark ? "#3A6A9A" : "#2A5A8A";
  const gold = isDark ? "#D4A017" : "#F0B429";
  const glow = isDark ? "#00C9A7" : "#7ECECA";
  const glass = isDark ? "rgba(20,60,100,0.75)" : "rgba(30,80,130,0.65)";
  const riv = isDark ? "#1A3A60" : "#1A4070";
  const shine = "linear-gradient(180deg,rgba(255,255,255,0.15) 0%,transparent 55%)";
  const arrowBg = isDark ? "rgba(0,201,167,0.22)" : "rgba(255,255,255,0.22)";
  const arrowBdr = isDark ? "#00C9A7" : "rgba(255,255,255,0.6)";

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 overflow-hidden flex items-center"
      style={{
        marginTop: "-2px",
        background: isDark
          ? "linear-gradient(180deg,#1C3A5E 0%,#0A1F3D 50%,#0D3B6E 100%)"
          : "linear-gradient(180deg,#1A8FA0 0%,#0D7B8A 50%,#0D3B6E 100%)",
      }}
    >
      {/* Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      <div className="relative z-10 w-full">
        {/* Title */}
        <motion.div
          className="text-center mb-8 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#FFFFFF" }}>
            Deep Sea Expeditions
          </h2>
          <p
            style={{
              color: "#A8D8E0",
              fontSize: "1.05rem",
              fontStyle: "italic",
              marginTop: "6px",
            }}
          >
            Navigate the submarine to explore my projects
          </p>
        </motion.div>

        {/* Horizontal scroll wrapper */}
        <div style={{ overflowX: "auto", overflowY: "visible", paddingBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              minWidth: "max-content",
              padding: "0 48px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div
                style={{
                  position: "relative",
                  paddingTop: `${ABOVE_HULL}px`,
                  paddingBottom: `${PORT_D / 2 + 28}px`,
                }}
              >
                {/* ══════════════════════ SUBMARINE ROW ══════════════════════ */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* ── BOW (rounded nose) ── */}
                  <div
                    style={{
                      width: `${BOW_W}px`,
                      height: `${HULL_H}px`,
                      background: hullGrad,
                      borderRadius: `${HULL_H / 2}px 0 0 ${HULL_H / 2}px`,
                      borderTop: `3px solid ${hullBorder}`,
                      borderBottom: `3px solid ${hullBorder}`,
                      borderLeft: `3px solid ${hullBorder}`,
                      borderRight: "none",
                      position: "relative",
                      flexShrink: 0,
                      overflow: "hidden",
                      zIndex: 2,
                    }}
                  >
                    <div style={{position: "absolute", inset: 0, background: shine, pointerEvents: "none" }} />
                    {/* Gold ring */}
                    <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "120px", height: "120px", borderRadius: "50%", border: `10px solid ${gold}`, boxShadow: `0 0 16px ${gold}55, inset 0 0 8px rgba(0,0,0,0.3)`, zIndex: 2, pointerEvents: "none" }} />
                    {/* Captain porthole glass */}
                    <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "98px", height: "98px", borderRadius: "50%", background: glass, border: `3px solid ${isDark ? "#2A5080" : "#3A6090"}`, boxShadow: "inset 0 0 28px rgba(0,0,0,0.6)", overflow: "hidden", zIndex: 3 }}>
                      {/* Instrument lights */}
                      <div style={{position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                        {[0, 1, 2].map((i) => (
                          <div key={i} style={{width: "6px", height: "6px", borderRadius: "50%", background: i === 1 ? glow : "rgba(255,255,255,0.2)", boxShadow: i === 1 ? `0 0 5px ${glow}` : "none" }} />
                        ))}
                      </div>
                      {/* Captain silhouette */}
                      <div style={{position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
                        <div style={{width: "26px", height: "26px", borderRadius: "50%", background: "rgba(0,0,0,0.78)", margin: "0 auto 2px" }} />
                        <div style={{width: "32px", height: "8px", background: "rgba(0,0,0,0.7)", borderRadius: "3px", margin: "-4px auto 0" }} />
                        <div style={{width: "38px", height: "26px", background: "rgba(0,0,0,0.65)", borderRadius: "6px 6px 0 0", margin: "0 auto" }} />
                      </div>
                      <div style={{position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(255,255,255,0.24) 0%,transparent 55%)" }} />
                    </div>
                    {/* Bolt screws around porthole */}
                    {[0, 60, 120, 180, 240, 300].map((deg) => (
                      <div key={deg} style={{position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", borderRadius: "50%", background: isDark ? "#4A6A8A" : "#5A7A9A", border: "1px solid rgba(0,0,0,0.4)", transform: `translate(-50%,-50%) rotate(${deg}deg) translateY(-70px)`, zIndex: 4 }} />
                    ))}
                  </div>

                  {/* ── HULL (main body) ── */}
                  <div style={{width: `${HULL_W}px`, height: `${HULL_H}px`, background: hullGrad, borderTop: `3px solid ${hullBorder}`, borderBottom: `3px solid ${hullBorder}`, position: "relative", flexShrink: 0, overflow: "visible", marginLeft: "-2px", zIndex: 1 }}>
                    {/* Hull shine */}
                    <div style={{position: "absolute", inset: 0, background: shine, pointerEvents: "none" }} />
                    {/* Panel line */}
                    <div style={{position: "absolute", top: "38%", left: 0, right: 0, height: "1.5px", background: `${hullBorder}60` }} />

                    {/* Rivets - abbreviated for space */}
                    <div style={{position: "absolute", top: "9px", left: "8px", right: "8px", display: "flex", justifyContent: "space-around" }}>
                      {[...Array(22)].map((_, i) => (<div key={`rt${i}`} style={{width: "7px", height: "7px", borderRadius: "50%", background: riv, border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }} />))}
                    </div>

                    {/* CONNING TOWER */}
                    <div style={{position: "absolute", bottom: "100%", left: "44px", width: `${TOWER_W}px`, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 8 }}>
                      {/* Antenna cluster */}
                      <div style={{display: "flex", gap: "14px", alignItems: "flex-end", marginBottom: "0px" }}>
                        {/* Short antenna */}
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <div style={{width: "8px", height: "8px", borderRadius: "50%", background: "#E84040", boxShadow: "0 0 6px #E84040", marginBottom: "2px" }} />
                          <div style={{width: "4px", height: "34px", background: "linear-gradient(180deg,#8AAAC0,#4A6A80)", borderRadius: "2px" }} />
                        </div>
                        {/* Tall antenna */}
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <div style={{width: "8px", height: "8px", borderRadius: "50%", background: "#E84040", boxShadow: "0 0 6px #E84040", marginBottom: "2px" }} />
                          <div style={{width: "4px", height: "50px", background: "linear-gradient(180deg,#8AAAC0,#4A6A80)", borderRadius: "2px" }} />
                        </div>
                        {/* Periscope */}
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "4px" }}>
                          <div style={{width: "20px", height: "12px", background: isDark ? "#3A6A9A" : "#4A80B0", border: `2px solid ${gold}`, borderRadius: "4px", position: "relative", overflow: "hidden", marginBottom: "2px" }}>
                            <div style={{position: "absolute", top: "2px", left: "3px", width: "10px", height: "3px", background: "rgba(255,255,255,0.3)", borderRadius: "2px" }} />
                          </div>
                          <div style={{width: "4px", height: "26px", background: "linear-gradient(180deg,#8AAAC0,#4A6A80)", borderRadius: "2px" }} />
                        </div>
                      </div>
                      {/* Tower box */}
                      <div style={{width: `${TOWER_W}px`, height: `${TOWER_H}px`, background: isDark ? "linear-gradient(180deg,#253F60 0%,#1A3050 100%)" : "linear-gradient(180deg,#3A6A9A 0%,#264E7A 100%)", border: `3px solid ${hullBorder}`, borderBottom: `3px solid ${hullBorder}`, borderRadius: "8px 8px 0 0", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                        {/* Tower viewport window */}
                        <div style={{position: "absolute", bottom: "11px", left: "50%", transform: "translateX(-50%)", width: "54px", height: "32px", background: glass, border: `3px solid ${gold}`, borderRadius: "8px", boxShadow: `0 0 10px ${glow}40, inset 0 0 8px rgba(0,0,0,0.5)`, overflow: "hidden" }}>
                          <div style={{position: "absolute", top: "3px", left: "5px", width: "14px", height: "4px", background: "rgba(255,255,255,0.32)", borderRadius: "3px" }} />
                        </div>
                        <div style={{position: "absolute", inset: 0, background: shine, pointerEvents: "none" }} />
                      </div>
                    </div>

                    {/* DORSAL FINS */}
                    <div style={{position: "absolute", bottom: "100%", right: "4px", width: "66px", height: "64px", background: hullGrad, border: `2px solid ${hullBorder}`, clipPath: "polygon(0% 100%, 100% 100%, 58% 0%)", zIndex: 3 }} />
                    <div style={{position: "absolute", bottom: "100%", right: "80px", width: "46px", height: "46px", background: hullGrad, border: `2px solid ${hullBorder}`, clipPath: "polygon(0% 100%, 100% 100%, 58% 0%)", zIndex: 3 }} />

                    {/* VENTRAL FINS */}
                    <div style={{position: "absolute", top: "100%", right: "4px", width: "66px", height: "64px", background: hullGrad, border: `2px solid ${hullBorder}`, clipPath: "polygon(0% 0%, 100% 0%, 58% 100%)", zIndex: 3 }} />
                    <div style={{position: "absolute", top: "100%", right: "80px", width: "46px", height: "46px", background: hullGrad, border: `2px solid ${hullBorder}`, clipPath: "polygon(0% 0%, 100% 0%, 58% 100%)", zIndex: 3 }} />

                    {/* Navigation arrows */}
                    <AnimatePresence>
                      {currentIndex > 0 && (
                        <motion.button key="larrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => scroll("left")} style={{position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "50%", background: arrowBg, border: `2px solid ${arrowBdr}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10, color: "#FFF" }} whileHover={{ scale: 1.15, x: -2 }} whileTap={{ scale: 0.9 }}>
                          <ChevronLeft style={{ width: "18px", height: "18px" }} />
                        </motion.button>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {currentIndex < maxIndex && (
                        <motion.button key="rarrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => scroll("right")} style={{position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "50%", background: arrowBg, border: `2px solid ${arrowBdr}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10, color: "#FFF" }} whileHover={{ scale: 1.15, x: 2 }} whileTap={{ scale: 0.9 }}>
                          <ChevronRight style={{ width: "18px", height: "18px" }} />
                        </motion.button>
                      )}
                    </AnimatePresence>

                    {/* PROJECT PORTHOLES */}
                    <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "28px", zIndex: 5 }}>
                      {visibleProjects.map((project, idx) => (
                        <motion.div key={`${currentIndex}-${idx}`} initial={{ opacity: 0, scale: 0.72 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.32, delay: idx * 0.08 }} style={{position: "relative", flexShrink: 0 }}>
                          {/* Gold porthole ring */}
                          <motion.div onClick={() => setSelectedProject(project)} style={{width: `${PORT_D}px`, height: `${PORT_D}px`, borderRadius: "50%", border: `10px solid ${gold}`, boxShadow: `0 0 18px ${gold}50, 0 4px 16px rgba(0,0,0,0.5)`, cursor: "pointer", overflow: "hidden", background: "#000", position: "relative" }} whileHover={{scale: 1.06, boxShadow: `0 0 28px ${gold}80, 0 8px 24px rgba(0,0,0,0.6)` }} whileTap={{ scale: 0.96 }}>
                            <img src={project.image} alt={project.title} style={{width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                            <div style={{position: "absolute", inset: 0, background: isDark ? "rgba(10,30,60,0.30)" : "rgba(20,70,120,0.20)" }} />
                            <div style={{position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(255,255,255,0.22) 0%,transparent 52%)" }} />
                            <div style={{position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 30%,${glow}28 0%,transparent 65%)`, opacity: 0.6 }} />
                            {[45, 135, 225, 315].map((deg) => (
                              <div key={deg} style={{position: "absolute", top: "50%", left: "50%", width: "9px", height: "9px", borderRadius: "50%", background: gold, border: "1px solid rgba(0,0,0,0.4)", transform: `translate(-50%,-50%) rotate(${deg}deg) translateY(-69px)` }} />
                            ))}
                          </motion.div>
                          {/* Label below hull */}
                          <div style={{position: "absolute", top: `${PORT_D + 8}px`, left: "50%", transform: "translateX(-50%)", width: "170px", textAlign: "center", zIndex: 20 }}>
                            <p style={{color: "#FFF", fontSize: "13px", fontWeight: 500, marginBottom: "5px", lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {project.title}
                            </p>
                            <span style={{display: "inline-block", padding: "2px 10px", borderRadius: "20px", fontSize: "11px", background: isDark ? "rgba(0,201,167,0.18)" : "rgba(126,206,202,0.25)", border: `1px solid ${isDark ? "#00C9A7" : "#7ECECA"}`, color: isDark ? "#00C9A7" : "#C8EEF2" }}>
                              {project.denomination}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* STERN */}
                  <div style={{width: `${STERN_W}px`, height: `${HULL_H}px`, background: hullGrad, borderTop: `3px solid ${hullBorder}`, borderBottom: `3px solid ${hullBorder}`, borderRight: `3px solid ${hullBorder}`, clipPath: "polygon(0 0,78% 14%,100% 50%,78% 86%,0 100%)", flexShrink: 0, position: "relative", marginLeft: "-2px", zIndex: 0 }}>
                    <div style={{position: "absolute", inset: 0, background: shine, pointerEvents: "none" }} />
                  </div>

                  {/* PROPELLER */}
                  <div style={{position: "relative", width: `${PROP_SIZE}px`, height: `${PROP_SIZE}px`, flexShrink: 0, marginLeft: "2px" }}>
                    <div style={{position: "absolute", inset: 0 }}>
                      {[0, 120, 240].map((deg) => (
                        <div key={deg} style={{position: "absolute", top: "50%", left: "50%", width: "34px", height: "14px", background: `linear-gradient(90deg,${isDark ? "#C9963A" : "#F0B429"},${isDark ? "#A07020" : "#C89018"})`, borderRadius: "6px 50% 50% 6px", transform: `translate(-4px,-50%) rotate(${deg}deg)`, transformOrigin: "4px 50%", boxShadow: "0 2px 6px rgba(0,0,0,0.45)" }} />
                      ))}
                      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "18px", height: "18px", borderRadius: "50%", background: isDark ? "#2A4A6A" : "#3A6090", border: `3px solid ${gold}`, boxShadow: "0 2px 6px rgba(0,0,0,0.5)", zIndex: 2 }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Page indicator dots */}
              <div style={{display: "flex", gap: "8px", marginTop: "12px", justifyContent: "center" }}>
                {projects.map((_, i) => (
                  <motion.button key={i} onClick={() => setCurrentIndex(Math.min(i, maxIndex))} style={{width: i >= currentIndex && i < currentIndex + VISIBLE ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", cursor: "pointer", padding: 0, background: i >= currentIndex && i < currentIndex + VISIBLE ? (isDark ? "#00C9A7" : "#7ECECA") : "rgba(255,255,255,0.28)", transition: "all 0.28s ease" }} whileHover={{ scale: 1.2 }} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{background: "rgba(0,0,0,0.80)", backdropFilter: "blur(10px)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div style={{position: "relative", width: "100%", maxWidth: "640px", maxHeight: "88vh", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column" }} initial={{ scale: 0.88, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.88, y: 40 }} transition={{type: "spring", damping: 22, stiffness: 280 }} onClick={(e) => e.stopPropagation()}>
              {/* Card bg */}
              <div style={{position: "absolute", inset: 0, background: isDark ? "linear-gradient(150deg,rgba(10,25,50,0.97) 0%,rgba(20,50,90,0.97) 100%)" : "linear-gradient(150deg,rgba(20,70,120,0.97) 0%,rgba(15,90,110,0.97) 100%)", border: `1.5px solid ${isDark ? "rgba(0,201,167,0.35)" : "rgba(255,255,255,0.3)"}`, borderRadius: "20px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }} />

              <div style={{position: "relative", overflowY: "auto", flex: 1, color: "#FFF" }}>
                {/* Banner */}
                <div style={{position: "relative", height: "180px", flexShrink: 0 }}>
                  <img src={selectedProject.image} alt={selectedProject.title} style={{width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{position: "absolute", inset: 0, background: isDark ? "linear-gradient(to bottom,rgba(0,0,0,0.08) 0%,rgba(10,25,50,0.95) 100%)" : "linear-gradient(to bottom,rgba(0,0,0,0.08) 0%,rgba(20,70,120,0.95) 100%)" }} />
                  <div style={{position: "absolute", bottom: "14px", left: "20px", padding: "4px 14px", borderRadius: "20px", background: isDark ? "rgba(0,201,167,0.25)" : "rgba(255,255,255,0.2)", border: `1.5px solid ${isDark ? "#00C9A7" : "rgba(255,255,255,0.6)"}`, fontSize: "12px", fontWeight: 600, color: isDark ? "#00C9A7" : "#FFF" }}>
                    {selectedProject.denomination}
                  </div>
                  <button onClick={() => setSelectedProject(null)} style={{position: "absolute", top: "12px", right: "12px", width: "34px", height: "34px", borderRadius: "50%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#FFF" }}>
                    <X style={{ width: "16px", height: "16px" }} />
                  </button>
                </div>

                {/* Body */}
                <div style={{padding: "20px 24px 24px" }}>
                  <h2 style={{fontSize: "clamp(1.2rem,3vw,1.6rem)", marginBottom: "14px", color: "#FFF", lineHeight: 1.2 }}>
                    {selectedProject.title}
                  </h2>

                  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px", marginBottom: "14px" }}>
                    {selectedProject.role && <InfoCard label="Role" value={selectedProject.role} fullWidth={!selectedProject.note} />}
                    {selectedProject.note && <InfoCard label="Note" value={selectedProject.note} />}
                    {selectedProject.problem && <InfoCard label="Problem" value={selectedProject.problem} fullWidth />}
                    {selectedProject.solution && <InfoCard label="Solution" value={selectedProject.solution} fullWidth highlight={isDark} />}
                  </div>

                  <div style={{marginBottom: "18px" }}>
                    <p style={{fontSize: "10px", opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "7px" }}>Tech Stack</p>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "7px" }}>
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} style={{padding: "3px 12px", borderRadius: "20px", fontSize: "12px", background: isDark ? "rgba(0,201,167,0.11)" : "rgba(255,255,255,0.14)", border: `1px solid ${isDark ? "rgba(0,201,167,0.34)" : "rgba(255,255,255,0.34)"}`, color: isDark ? "#7ECECA" : "#D0F0F8" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {selectedProject.isFigmaProject ? (
                      <>
                        <Btn href="#" icon={<ExternalLink style={{width: "14px", height: "14px" }} />} label="View Prototype" primary isDark={isDark} />
                        <Btn href="#" icon={<Figma style={{width: "14px", height: "14px" }} />} label="Figma File" isDark={isDark} />
                      </>
                    ) : selectedProject.isDocsProject ? (
                      <>
                        <Btn href="#" icon={<FileText style={{width: "14px", height: "14px" }} />} label="View Docs" primary isDark={isDark} />
                        <Btn href="#" icon={<Github style={{width: "14px", height: "14px" }} />} label="GitHub" isDark={isDark} />
                      </>
                    ) : (
                      <>
                        <Btn href="#" icon={<ExternalLink style={{width: "14px", height: "14px" }} />} label="Live Demo" primary isDark={isDark} />
                        <Btn href="#" icon={<Github style={{width: "14px", height: "14px" }} />} label="View Code" isDark={isDark} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wave transition */}
      <WaveDivider fillColor={isDark ? "#0D3B6E" : "#0D3B6E"} />
    </section>
  );
}

function InfoCard({label, value, fullWidth, highlight}: {label: string; value: string; fullWidth?: boolean; highlight?: boolean}) {
  return (
    <div style={{padding: "11px 12px", borderRadius: "11px", background: highlight ? "rgba(0,201,167,0.08)" : "rgba(255,255,255,0.07)", border: `1px solid ${highlight ? "rgba(0,201,167,0.28)" : "rgba(255,255,255,0.11)"}`, ...(fullWidth ? { gridColumn: "1 / -1" } : {})}}>
      <p style={{fontSize: "10px", opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: "4px" }}>{label}</p>
      <p style={{fontSize: "12.5px", opacity: 0.92, lineHeight: 1.5 }}>{value}</p>
    </div>
  );
}

function Btn({href, icon, label, primary = false, isDark}: {href: string; icon: React.ReactNode; label: string; primary?: boolean; isDark: boolean}) {
  return (
    <motion.a href={href} style={primary ? btnPrimary(isDark) : btnSecondary(isDark)} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
      {icon} {label}
    </motion.a>
  );
}

function btnPrimary(isDark: boolean): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 20px", borderRadius: "10px", fontSize: "13px", fontWeight: 600,
    background: isDark ? "#00C9A7" : "#1A8FA0", color: "#FFF", textDecoration: "none", cursor: "pointer",
    boxShadow: isDark ? "0 4px 14px rgba(0,201,167,0.35)" : "0 4px 14px rgba(26,143,160,0.35)"
  };
}

function btnSecondary(isDark: boolean): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 20px", borderRadius: "10px", fontSize: "13px", fontWeight: 600,
    background: "rgba(255,255,255,0.09)", border: `1.5px solid ${isDark ? "rgba(0,201,167,0.48)" : "rgba(255,255,255,0.38)"}`,
    color: "#FFF", textDecoration: "none", cursor: "pointer"
  };
}
