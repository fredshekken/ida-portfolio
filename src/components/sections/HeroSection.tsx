"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { isDark } = useTheme();
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(to bottom, #050D1A, #0A1F3D, #1C3A5E)"
          : "linear-gradient(to bottom, #B8E4F9, #7ECECA, #1A8FA0)",
      }}
    >

      {/* Sun illustration */}
      <div className="absolute top-16 left-24 w-40 h-40 rounded-full bg-gradient-radial from-[#ffd966] via-[#f6a623] to-transparent opacity-90 blur-sm" />
      <div className="absolute top-16 left-24 w-32 h-32 rounded-full bg-gradient-to-br from-[#ffe066] to-[#f6a623]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl font-bold text-[#1a2a5e] leading-none tracking-tight mb-4"
        >
          Frieda Magaan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[#1a2a5e] text-xl md:text-2xl font-medium mb-3"
        >
          Computer Science Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-[#1a2a5e]/80 text-base md:text-lg max-w-xl mb-10"
        >
          UI/UX Designer & Web Developer exploring the depths of web development
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-[#1a2a5e]/30 text-[#1a2a5e] text-sm font-medium rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-[#1a6b8a] text-white text-sm font-medium rounded-full hover:bg-[#1a5a78] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-4"
        >
          {[
            { href: "https://github.com/YOUR_USERNAME", label: "GH", icon: "⌥" },
            { href: "https://linkedin.com/in/YOUR_USERNAME", label: "LI", icon: "in" },
            { href: "mailto:your@email.com", label: "Email", icon: "✉" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/20 border border-[#1a2a5e]/20 flex items-center justify-center text-[#1a2a5e] text-sm hover:bg-white/40 transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}