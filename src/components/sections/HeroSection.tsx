"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "transparent",
      }}
    >

      {/* Sun illustration removed */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tight mb-4"
          style={{ color: isDark ? '#A8D8E0' : '#1a2a5e' }}
        >
          Frieda Magaan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-xl md:text-2xl font-medium mb-3"
          style={{ color: isDark ? '#A8D8E0' : '#1a2a5e' }}
        >
          Computer Science Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-base md:text-lg mb-10"
          style={{ color: isDark ? 'rgba(168,216,224,0.9)' : 'rgba(26,42,94,0.8)' }}
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
          <motion.a
            href="#projects"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-secondary"
            style={{ color: "#1a2a5e" }}
          >
            <span className="relative z-10">View Projects</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary"
          >
            <span className="relative z-10">Get in Touch</span>
          </motion.a>
        </motion.div>


      </div>
    </section>
  );
}