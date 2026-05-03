"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 px-6 py-4"
      style={{
        top: 0,
        zIndex: modalOpen ? 10 : 40,
        background: modalOpen
          ? "transparent"
          : scrollDepth > 0.1
          ? isDark
            ? "rgba(10, 31, 61, 0.8)"
            : "rgba(255, 255, 255, 0.3)"
          : "transparent",
        backdropFilter: modalOpen ? "none" : scrollDepth > 0.1 ? "blur(12px)" : "none",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: modalOpen ? 0.65 : 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
            <motion.div
              className="font-medium tracking-wide cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("home")}
            >
          <span style={{ color: 'var(--color-brand)' }}>dev.kalayaan</span>
            </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative hover:opacity-80 transition-opacity"
              style={{ color: isDark ? "#B8E4F9" : "#0D3B6E" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {link.label}
            </motion.button>
          ))}

          {/* Dark mode toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
              className="relative w-14 h-7 rounded-full p-1 transition-colors"
            style={{ background: 'var(--color-toggle-bg)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-lg"
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {isDark ? (
                <Moon className="w-3 h-3" style={{ color: 'var(--color-toggle-bg)' }} />
              ) : (
                <Sun className="w-3 h-3" style={{ color: 'var(--color-accent)' }} />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ color: isDark ? "#B8E4F9" : "#0D3B6E" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ background: isDark ? "rgba(10,31,61,0.95)" : "rgba(255,255,255,0.95)" }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left hover:opacity-80 transition-opacity"
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