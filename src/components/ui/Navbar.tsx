"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  scrollDepth: number;
}

const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills & Experiences", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ isDark, setIsDark, scrollDepth }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent)?.detail;
      setModalOpen(Boolean(detail?.open));
    };
    window.addEventListener('project-modal', handler as EventListener);
    // initial check
    setModalOpen(Boolean(document.body.classList.contains('project-modal-open')));
    return () => window.removeEventListener('project-modal', handler as EventListener);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 px-4 sm:px-6 py-3 sm:py-4"
      style={{
        top: 0,
        zIndex: modalOpen ? 10 : 40,
        background: modalOpen
          ? "transparent"
          : scrollDepth > 0
          ? isDark
            ? "rgba(10, 31, 61, 0.8)"
            : "rgba(255, 255, 255, 0.3)"
          : "transparent",
        backdropFilter: modalOpen ? "none" : scrollDepth > 0 ? "blur(12px)" : "none",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: modalOpen ? 0.65 : 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Logo */}
        <motion.div
          className="font-semibold tracking-wide cursor-pointer text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("home")}
        >
          <span className="inline-flex items-center gap-2" style={{ color: isDark ? "#D7EAF9" : "#0D3B6E" }}>
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors"
              style={{ backgroundColor: isDark ? "#B8E4F9" : "#0D3B6E" }}
            >
              <WaveIcon className="h-4 w-4" style={{ color: isDark ? "#0D3B6E" : "#B8E4F9" }} />
            </span>
            <span>dev.kalayaan</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative font-semibold hover:opacity-80 transition-opacity"
              style={{ color: isDark ? "#B8E4F9" : "#0D3B6E" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {link.label}
            </motion.button>
          ))}

          {/* Dark mode toggle */}
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} compact />

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors"
            style={{
              color: isDark ? "#B8E4F9" : "#0D3B6E",
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.24)",
            }}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden mx-4 mt-3 rounded-2xl border px-4 py-4 shadow-lg backdrop-blur-xl flex flex-col gap-3"
          style={{
            background: isDark ? "rgba(10,31,61,0.96)" : "rgba(255,255,255,0.92)",
            borderColor: isDark ? "rgba(184,228,249,0.12)" : "rgba(13,59,110,0.1)",
          }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left rounded-xl px-3 py-2 font-semibold transition-colors hover:bg-white/10"
              style={{ color: isDark ? "#B8E4F9" : "#0D3B6E" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

function WaveIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <path d="M4 9.3c1.6-1.3 3.4-2 5.2-2 1.4 0 2.4.3 3.4.9.9.5 1.8 1.1 3.1 1.1 1.4 0 2.6-.5 4-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M4 12.6c1.6-1.3 3.4-2 5.2-2 1.4 0 2.4.3 3.4.9.9.5 1.8 1.1 3.1 1.1 1.4 0 2.6-.5 4-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M4 15.9c1.6-1.3 3.4-2 5.2-2 1.4 0 2.4.3 3.4.9.9.5 1.8 1.1 3.1 1.1 1.4 0 2.6-.5 4-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function ThemeToggle({
  isDark,
  onToggle,
  compact = false,
}: {
  isDark: boolean;
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative rounded-full p-1 transition-colors ${compact ? "w-12 h-6" : "w-14 h-7"}`}
      style={{ background: "var(--color-toggle-bg)" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`${compact ? "w-4 h-4" : "w-5 h-5"} rounded-full bg-white flex items-center justify-center shadow-lg`}
        animate={{ x: isDark ? (compact ? 20 : 24) : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="w-3 h-3" style={{ color: "var(--color-toggle-bg)" }} />
        ) : (
          <Sun className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
        )}
      </motion.div>
    </motion.button>
  );
}