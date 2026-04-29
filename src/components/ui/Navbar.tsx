"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  scrollDepth: number;
}

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar({ isDark, setIsDark, scrollDepth }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background:
          scrollDepth > 0.1
            ? isDark
              ? "rgba(10, 31, 61, 0.8)"
              : "rgba(255, 255, 255, 0.3)"
            : "transparent",
        backdropFilter: scrollDepth > 0.1 ? "blur(12px)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div className="font-medium tracking-wide" whileHover={{ scale: 1.05 }}>
          <span style={{ color: isDark ? "#00C9A7" : "#1A8FA0" }}>Portfolio</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <motion.button
              key={link}
              onClick={() => scrollToSection(link)}
              className="relative hover:opacity-80 transition-opacity"
              style={{ color: isDark ? "#B8E4F9" : "#0D3B6E" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {link}
            </motion.button>
          ))}

          {/* Dark mode toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            className="relative w-14 h-7 rounded-full p-1 transition-colors"
            style={{ background: isDark ? "#1C3A5E" : "#7ECECA" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-lg"
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {isDark ? (
                <Moon className="w-3 h-3 text-[#1C3A5E]" />
              ) : (
                <Sun className="w-3 h-3 text-[#FFD580]" />
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
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-left hover:opacity-80 transition-opacity"
              style={{ color: isDark ? "#B8E4F9" : "#0D3B6E" }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}